import mongoose from "mongoose";
import CatModel from "./models/cat.model.ts";

const sampleCats = [
  {
    name: "Milo",
    breed: "Ragdoll",
    description: "Docile, affectionate, and known for their beautiful blue eyes and soft coat.",
    kidsFriendly: true,
    apartmentFriendly: true,
    lifeSpan: 15,
    energyLevel: "Low to Medium",
    image: "https://example.com/ragdoll.jpg",
    color: "Seal Point"
  },
  {
    name: "Thor",
    breed: "Bengal",
    description: "Highly energetic, intelligent, and wild-looking cat breed.",
    kidsFriendly: false,
    apartmentFriendly: false,
    lifeSpan: 12,
    energyLevel: "High",
    image: "https://example.com/bengal.jpg",
    color: "Brown Spotted Tabby"
  },
  {
    name: "Bella",
    breed: "British Shorthair",
    description: "Easygoing, calm, and quiet cat that is great for families and apartments.",
    kidsFriendly: true,
    apartmentFriendly: true,
    lifeSpan: 14,
    energyLevel: "Low",
    image: "https://example.com/british-shorthair.jpg",
    color: "Blue"
  },
  {
    name: "Luna",
    breed: "Siamese",
    description: "Vocal, social, and very affectionate cat breed.",
    kidsFriendly: true,
    apartmentFriendly: true,
    lifeSpan: 15,
    energyLevel: "Medium to High",
    image: "https://example.com/siamese.jpg",
    color: "Chocolate Point"
  },
  {
    name: "Simba",
    breed: "Maine Coon",
    description: "Gentle giants that are very friendly and dog-like in behavior, but need space.",
    kidsFriendly: true,
    apartmentFriendly: false,
    lifeSpan: 13,
    energyLevel: "Medium",
    image: "https://example.com/maine-coon.jpg",
    color: "Brown Tabby"
  },
  {
    name: "Oliver",
    breed: "Persian",
    description: "Quiet and sweet cat that loves a serene environment and needs regular grooming.",
    kidsFriendly: false,
    apartmentFriendly: true,
    lifeSpan: 12,
    energyLevel: "Low",
    image: "https://example.com/persian.jpg",
    color: "White"
  }
];

async function seed() {
  try {
    await mongoose.connect("mongodb://0.0.0.0/tiny-cats");
    console.log("Connected to MongoDB for seeding...");
    
    // Clear existing cats
    await CatModel.deleteMany({});
    console.log("Cleared existing cats.");

    // Insert sample cats
    await CatModel.insertMany(sampleCats);
    console.log("Successfully seeded sample cats!");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
