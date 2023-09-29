import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import {
  CloudinaryResponse,
  UploadVideoResponse,
} from './cloudinary.responses';
import * as toStream from 'buffer-to-stream';
import { v2 } from 'cloudinary';
import { resolve } from 'path';
import { error } from 'console';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  private upload(file: Express.Multer.File): Promise<CloudinaryResponse> {
    this.logger.log(`private upload running...`);
    return new Promise<CloudinaryResponse>((reject, resolve) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: 'hngxV',
          resource_type: 'video',
        },
        (result, err) => {
          if (err) return reject(err);
          resolve(result);
        },
      );

      toStream(file.buffer).pipe(upload);
    });
  }

  async uploadVideoFile(
    file: Express.Multer.File,
  ): Promise<UploadVideoResponse> {
    try {
      this.logger.log(`upload video file running...`);
      const result = await this.upload(file);
      return {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException(
        'An error occurred while uploading video',
      );
    }
  }

  async deleteVideo(public_id: string) {
    return new Promise(async(resolve, reject) => {
      await v2.uploader.destroy(public_id, (error, result) => {
        if(error) return reject(error)
        return resolve(`file with public_id ${public_id} deletes successfully` + JSON.stringify(result))
      })
    })
  }
}
