'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Experience } from '../data/experience'

interface ExperienceEntryProps {
  experience: Experience
}

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isCurrentRole = !experience.endDate

  return (
    <div 
      className="grid grid-cols-[100px_1fr] gap-6 mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-20 h-20">
        <Image
          src={experience.companyLogo}
          alt={`${experience.companyName} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl ${isCurrentRole ? 'font-bold' : ''}`}>
            {experience.companyName}
          </h3>
          <span className="text-sm text-muted-foreground">
            {new Date(experience.startDate).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            })}
            {' - '}
            {experience.endDate 
              ? new Date(experience.endDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  year: 'numeric' 
                })
              : 'Present'
            }
          </span>
        </div>
        <div className="mb-2">
          <h4 className="font-medium">{experience.title}</h4>
          <p className="text-sm text-muted-foreground">{experience.location}</p>
        </div>
        <div className="flex gap-2 mb-3">
          {experience.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 text-xs rounded-full bg-muted"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed">
          {isHovered ? experience.longDescription : experience.description}
        </p>
      </div>
    </div>
  )
}

