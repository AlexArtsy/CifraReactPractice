import React from 'react';

export type TabList = {
  value: string;
  list: string;
};

export type Content = {
  value: string;
  content: React.ReactNode;
};

export type Variant = 'line' | 'subtle' | 'enclosed' | 'outline' | 'plain';
