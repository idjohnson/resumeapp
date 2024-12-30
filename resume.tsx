import { userInfo } from './data/user'
import { experiences } from './data/experience'
import { ProfileHeader } from './components/profile-header'
import { ContactInfo } from './components/contact-info'
import { ExperienceEntry } from './components/experience-entry'

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <ProfileHeader user={userInfo} />
        <ContactInfo user={userInfo} />
      </div>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceEntry
            key={`${experience.companyName}-${experience.startDate}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  )
}

