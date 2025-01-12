import "dotenv/config"
import { promises as fs } from 'fs'
import path from 'path'
import cloudinary from 'cloudinary'

import type { Work } from '@/lib/data'

import { works, albums  } from '@/lib/data'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

export async function getAlbumPhotos(album: string): Promise<string[]> {
  try {
    
    const result = await cloudinary.v2.api.resources({
      type: "upload",
      max_results: 500,
    });

    const photos = result.resources.filter(
      (resource: any) => resource.asset_folder === `albums/${album}`
    )

    return photos.map((photo: any) => photo.secure_url)
  } catch (error) {
    console.error(`Error al obtener fotos del álbum "${album}":`, error)
    return []
  }
}

export async function getAlbumList () {
  try {
    return Object.entries(albums).map(([key, value]: [string, any]) => ({
      name: key,
      ...value
    }))
  } catch (error) {
    console.error("Error loading album list: ", error)
    return []
  }
}

export async function getRecentWorks () {
  try {
    return works
    .sort((a: Work, b: Work) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0,4)
  } catch (error) {
    console.error('No works! ', error)
    return []
  }
}

export async function getStarredAlbums () {
  try {
    return albums
    .filter(album => album.starred === true)
  } catch (error) {
    console.error('No albums!', error)
    return []
  }
}

export async function getAllWorks () {
  try {
    return works
  } catch (error) {
    console.error('No works!', error)
    return []
  }
}

export async function getAllAlbums () {
  try {
    return albums
  } catch (error) {
    console.error('No albums!', error)
    return []
  }
}

export async function getImagesFromDirectory (directory: string) {
  const dirPath = path.join(process.cwd(), directory)
  try {
    const files = await fs.readdir(dirPath)
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)
    });
    return imageFiles
  } catch (error) {
    console.error('Error reading directory:', error)
    return []
  }
}
