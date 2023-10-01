import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError, AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
import { catchError, firstValueFrom } from 'rxjs';


@Injectable()
export class TranscriptionService {
  private logger = new Logger(TranscriptionService.name);

  constructor(private http: HttpService, private config: ConfigService) {}
  private key: string = this.config.get('OPENAI_API_KEY');
  private url = this.config.get('OPENAI_URL');
  private model = 'whisper-1';
  private requestConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${this.key}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  async getTranscription(fileName: string) {
    this.logger.log('starting text transcribe...')
    const formData = new FormData()
    this.logger.log('first append...')
    formData.append('model', this.model);

    this.logger.log('second append...')
    formData.append('file', fileName);

    this.logger.log('making axios request...')
    const { data } = await firstValueFrom(
      this.http.post(this.url, formData, this.requestConfig).pipe(
        catchError((err: AxiosError) => {
          this.logger.error(err.response.data);
          throw 'API not available';
        }),
      ),
    );

    return data
  }
}
