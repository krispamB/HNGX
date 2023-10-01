import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Video } from '@prisma/client';
import * as fs from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { InitiateVideoDto } from './dto';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { TranscriptionService } from 'src/transcription/transcription.service';

@Injectable()
export class VideoService {
  constructor(
    private prisma: PrismaService,
    private text: TranscriptionService,
  ) {}
  private uploadPath = './uploads';

  async initiateVideo(dto: InitiateVideoDto) {
    if (!fs.existsSync(this.uploadPath))
      fs.mkdirSync(this.uploadPath, { recursive: true });
    const random = randomUUID();

    const fileName = `${random}.mp4`;
    const video_path = join(this.uploadPath, fileName);

    const newVideo: Video = await this.prisma.video.create({
      data: {        title: dto.title,
        video_path,
      },
    });

    if (!newVideo) throw new BadRequestException('Video creation failed');

    await fs.promises.writeFile(video_path, '');

    return {
      statusCode: 201,
      message: 'Video created successfully',
      data: newVideo,
    };
  }

  async appendVideo(videoFile: Express.Multer.File, videoId: string) {
    const video = await this.prisma.video.findUnique({
      where: {
        id: videoId,
      },
    });

    if (!fs.existsSync(video.video_path))
      throw new NotFoundException('Video file not found');

    await fs.promises.appendFile(video.video_path, videoFile.buffer);

    return {
      statusCode: 200,
      message: 'File appended successfully',
    };
  }

  async endVideo(videoId: string) {
    const video = await this.prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        status: 'COMPLETED',
      },
    });

    return {
      statusCode: 200,
      message: 'Recording ended',
      data: video,
    };
  }
}
