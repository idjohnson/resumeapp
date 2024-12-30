export interface UserInfo {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  social: {
    mastodon: string;
    bluesky: string;
  };
  photo: string;
}

export const userInfo: UserInfo = {
  firstName: "John",
  lastName: "Doe",
  title: "Senior Software Engineer",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Lane, San Francisco, CA 94105",
  social: {
    mastodon: "@johndoe@mastodon.social",
    bluesky: "@johndoe.bsky.social"
  },
  photo: "/photos/profile.jpg"
}

