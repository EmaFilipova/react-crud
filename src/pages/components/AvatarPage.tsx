import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AvatarPage = () => {
  const profileImageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Avatar</h1>
        <p className="text-gray-500 max-w-3xl">
          Avatars are visual elements that represent users within an interface.
          They are used for personalization, identity, and enhancing user
          recognition. Avatars can display profile pictures or initials and
          should be integrated where users need to be easily identified, such as
          in user profiles, comment sections, version history or content cards.
        </p>
      </div>

      {/* Basic Usage */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>
            Avatar with an image or fallback initials.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-center gap-6">
          <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-md">
            <Avatar>
              <AvatarImage src={profileImageUrl} alt="User" />
              <AvatarFallback>SF</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      {/* Anatomy */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Avatar Anatomy</CardTitle>
          <CardDescription>Components that make up the Avatar.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center gap-10 p-4 bg-gray-50 rounded-md">
            <div className="flex flex-col items-center gap-2">
              <Avatar variant="outline">
                <AvatarImage src={profileImageUrl} alt="User" />
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                image
              </Badge>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                initials
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Avatar Sizes</CardTitle>
          <CardDescription>
            Avatars come in different sizes for various contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-10 p-4 bg-gray-50 rounded-md">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="small">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                small
              </Badge>
              <span className="text-xs text-gray-500">24x24</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="medium">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                medium
              </Badge>
              <span className="text-xs text-gray-500">32x32</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="large">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                large
              </Badge>
              <span className="text-xs text-gray-500">64x64</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="extra-large">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                extra large
              </Badge>
              <span className="text-xs text-gray-500">256x256</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Themes */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Environment Variations</CardTitle>
          <CardDescription>
            Avatars can be styled differently based on light or dark
            environments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-10 p-4 rounded-md">
            <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-md">
              <Avatar>
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback theme="light">SF</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                light environment
              </Badge>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-md">
              <Avatar>
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback theme="dark">SF</AvatarFallback>
              </Avatar>
              <Badge
                variant="outline"
                className="text-pink-500 bg-transparent border-pink-500/20"
              >
                dark environment
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Labels */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Avatars with Labels</CardTitle>
          <CardDescription>
            Avatars can be paired with user names or labels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md w-fit">
              <Avatar size="small">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback>FP</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Fiona Peters</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md w-fit text-white">
              <Avatar size="small">
                <AvatarImage src={profileImageUrl} alt="User" />
                <AvatarFallback theme="dark">GR</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">George Rock</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Border */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Avatar with Outline</CardTitle>
          <CardDescription>
            Avatars can include an outline to stand out from backgrounds.
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-md">
          <div className="flex flex-col items-center gap-2">
            <Avatar variant="outline" size="large">
              <AvatarImage
                src={profileImageUrl}
                alt="User"
                className="scale-[0.95]"
              />
              <AvatarFallback>SF</AvatarFallback>
            </Avatar>
            <div className="flex gap-10 items-center mt-4">
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                1px outline
              </Badge>
              <Badge variant="outline" className="text-pink-500 bg-transparent">
                scaled image
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
          <CardDescription>
            Examples of avatars in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Menu Example */}
            <div className="border rounded-md p-4 flex flex-col gap-4">
              <div className="text-sm font-medium">User Menu</div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={profileImageUrl} alt="User" />
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Emily Harrison</span>
                  <span className="text-xs text-gray-500">My space</span>
                </div>
              </div>
              <div className="pl-9 flex flex-col gap-2">
                <div className="text-sm">My issues</div>
                <div className="text-sm">Settings</div>
                <div className="text-sm">Help</div>
                <div className="text-sm">Collapse Menu</div>
              </div>
            </div>

            {/* Task Assignment */}
            <div className="border rounded-md p-4">
              <div className="text-sm font-medium mb-4">Task Assignment</div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Assignee</span>
                <div className="flex items-center gap-2">
                  <Avatar size="small">
                    <AvatarImage src={profileImageUrl} alt="User" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Tom</span>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className="border rounded-md p-4">
              <div className="text-sm font-medium mb-4">Content Card</div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Due: 12 Feb 2025</span>
                <Avatar size="small">
                  <AvatarImage src={profileImageUrl} alt="User" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-sm font-medium">
                Sunset Over the City Skyline, New York
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">7 Tasks</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvatarPage;
