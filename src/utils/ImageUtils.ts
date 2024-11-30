import exifr from 'exifr';
import { LocationData } from '../types/location';

export async function extractImageLocation(file: File): Promise<LocationData | null> {
  try {
    const gps = await exifr.gps(file);
    if (gps && gps.latitude && gps.longitude) {
      return {
        latitude: gps.latitude.toString(),
        longitude: gps.longitude.toString(),
        message: ''
      };
    }
    return null;
  } catch (error) {
    console.error('Error extracting EXIF data:', error);
    return null;
  }
}