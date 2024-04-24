import React from 'react';
import 'dayjs/locale/zh-cn';
import { FRProps } from './type';
export default function withProvider<T>(Element: React.ComponentType<T>): React.FC<FRProps>;
