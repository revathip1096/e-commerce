"use client"
import {create} from "zustand";
import { persist  } from 'zustand/middleware';

export const useTheme = create(persist((set) => ({
    theme:"",
    settheme: (newtheme) =>
      set((state) => ({
        theme: newtheme,
      })),
    
}),
{
    name: 'theme', // name of the item in the storage (must be unique)
  },
));