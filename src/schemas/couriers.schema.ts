import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourierDocument = Courier & Document;

@Schema()
export class Courier {
  @Prop({ required: true })
  courierId: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const CourierSchema = SchemaFactory.createForClass(Courier);
