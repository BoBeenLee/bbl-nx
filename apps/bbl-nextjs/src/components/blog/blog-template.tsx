'use client'

import React from 'react'
import { BlogTemplate as FeaturesBlogTemplate, BlogTemplateProps } from '@bbl-nx/features/blog/components/templates/blog-template/blog-template';

export default function BlogTemplate(props: BlogTemplateProps) {
  return (
    <FeaturesBlogTemplate {...props} />
  )
}
