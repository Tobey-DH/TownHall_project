import 'dotenv/config';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'biz008kr',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for faster responses
  apiVersion: '2024-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper to convert Sanity portable text to HTML
export function toPlainText(blocks = []) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    })
    .join('\n\n');
}

// Fetch all events
export async function getAllEvents() {
  const query = `*[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    slug,
    excerpt,
    eventDate,
    location,
    locationType,
    content,
    learningOutcomes,
    capacity,
    recording,
    featured
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Fetch upcoming events
export async function getUpcomingEvents() {
  const now = new Date().toISOString();
  const query = `*[_type == "event" && eventDate >= $now] | order(eventDate asc) {
    _id,
    title,
    slug,
    excerpt,
    eventDate,
    location,
    locationType,
    content,
    learningOutcomes,
    capacity,
    recording,
    featured
  }`;
  
  try {
    return await client.fetch(query, { now });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}

// Fetch all blog posts
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    "author": author->{name, role},
    mainImage,
    content,
    tags,
    featured
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch site settings
export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0] {
    title,
    description,
    organization,
    social
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

// Fetch team members
export async function getTeamMembers() {
  const query = `*[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    role,
    bio,
    image,
    email,
    social
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}
