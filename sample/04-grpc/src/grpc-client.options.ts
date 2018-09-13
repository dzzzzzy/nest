import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, './hero/hero.proto'),
    loader: {
      arrays: true,
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  },
};
