import { AtSign, MapPin, Phone } from 'lucide-react'
import { UserInfo } from '../data/user'

interface ContactInfoProps {
  user: UserInfo
}

export function ContactInfo({ user }: ContactInfoProps) {
  return (
    <div className="text-right flex flex-col gap-2 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-primary" />
        <a href={`tel:${user.phone}`} className="hover:text-foreground">
          {user.phone}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <AtSign size={16} className="text-primary" />
        <a href={`mailto:${user.email}`} className="hover:text-foreground">
          {user.email}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-primary" />
        <span>{user.address}</span>
      </div>
      <div className="h-px bg-border my-2" />
      <div className="flex flex-col gap-2">
        <a 
          href={`https://mastodon.social/${user.social.mastodon}`}
          className="hover:text-foreground flex items-center gap-2"
          rel="me"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-primary" fill="currentColor">
            <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
          </svg>
          {user.social.mastodon}
        </a>
        <a 
          href={`https://${user.social.bluesky}`}
          className="hover:text-foreground flex items-center gap-2"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-primary" fill="currentColor">
            <path d="M15.34 8.12L8 14.62.66 8.12c-.88-.81-.88-2.13 0-2.94l1.06-.98c.89-.81 2.32-.81 3.2 0L8 7.01l3.08-2.81c.89-.81 2.32-.81 3.2 0l1.06.98c.88.81.88 2.13 0 2.94z"/>
          </svg>
          {user.social.bluesky}
        </a>
      </div>
    </div>
  )
}

