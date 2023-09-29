import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Video } from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadService {
  private readonly logger =  new Logger(UploadService.name)
  constructor(private readonly cloudinary: CloudinaryService, private prisma: PrismaService){}

  async uploadVideo(file: Express.Multer.File) {
    if(!file) throw new BadRequestException('Video file must be added')
    this.logger.log(`uploading video...`)
    const uploadResult = await this.cloudinary.uploadVideoFile(file)

    this.logger.log(`creating video in db...`)
    const video: Video = await this.prisma.video.create({
      data: {
        public_id: uploadResult.public_id,
        secure_url: uploadResult.secure_url
      }
    })

    return {
      statusCode: 201,
      message: 'Video saved successfully',
      data: video
    }

  }

  async getAllUploads() {
    const uploads: Video[] = await this.prisma.video.findMany({})
    
    return {
      statusCode: 200,
      message: 'Get request successful',
      data: uploads
    }
  }

  async getVideoById(id: string) {
    this.logger.log(`finding video with id ${id}`)
    const video = await this.prisma.video.findUnique({
      where: {
        id
      }
    })

    if(!video) throw new NotFoundException('Video with id not found')

    return {
      statusCode: 200,
      message: 'Video get request successful',
      data: video
    }

  }

  async deleteVideo(id: string) {
    this.logger.log(`finding video with id ${id}`)
    const video = await this.prisma.video.findUnique({
      where: {
        id
      }
    })

    if(!video) throw new NotFoundException('Video with id not found')

    this.logger.log(`deleting video with public_id ${video.public_id}`)
    const result = await this.cloudinary.deleteVideo(video.public_id)

    if(!result) throw new BadRequestException('Video delete unsuccessful')

    await this.prisma.video.delete({
      where: {
        id
      }
    })

    return {
      statusCode: 200,
      message: 'Video delete successful'
    }

  }
}
