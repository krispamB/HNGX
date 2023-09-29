import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import {
  ApiConsumes,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Video')
@Controller('video')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary:
      'Upload a video, keep it under 5mb, could not figure out how to include image upload, you can test with postman',
  })
  @UseInterceptors(FileInterceptor('video'))
  async uploadVideo(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.uploadVideo(file);
  }

  @ApiOkResponse({
    description: 'Video fetch success response',
  })
  @ApiOperation({ summary: 'Get all videos uploaded' })
  @Get()
  getAllUploads() {
    return this.uploadService.getAllUploads();
  }

  @ApiOperation({ summary: 'Get video by Id' })
  @ApiOkResponse({
    description: 'Video fetch success response',
  })
  @ApiNotFoundResponse({
    description: 'Video not found response',
  })
  @ApiParam({ name: 'id', required: true, description: 'video id' })
  @Get(':id')
  getVideoById(@Param('id') videoId: string) {
    return this.uploadService.getVideoById(videoId);
  }

  @ApiOperation({ summary: 'Delete video' })
  @ApiOkResponse({
    description: 'Video deleted success response',
  })
  @ApiNotFoundResponse({
    description: 'Video not found',
  })
  @ApiParam({ name: 'id', required: true, description: 'video id' })
  @Delete(':id')
  deleteVideo(@Param('id') videoId: string) {
    return this.uploadService.deleteVideo(videoId);
  }
}
