import Image from 'next/image'
import { UserInfo } from '../data/user'

interface ProfileHeaderProps {
  user: UserInfo
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          {user.firstName} {user.lastName}
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground">{user.title}</h2>
      </div>
    </div>
  )
}

