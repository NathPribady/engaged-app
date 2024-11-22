import * as React from "react"
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  title: string
  subtitle: string
  imageUrl: string
  iconColor?: string
}

function EncyclopediaCard({ title, subtitle, imageUrl, iconColor = "bg-blue-100", className, ...props }: CardProps) {
  return (
    <Card className={cn("group relative overflow-hidden border-none bg-white shadow-sm transition-all hover:shadow-md", className)} {...props}>
      <CardContent className="p-6">
        <div className={`${iconColor} mb-6 size-12 rounded-full`}>
          <Image
            src={imageUrl}
            alt=""
            width={48}
            height={48}
            className="size-12 p-2"
          />
        </div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

interface SectionProps {
  title: string
  cards: Array<{
    title: string
    subtitle: string
    imageUrl: string
    iconColor?: string
  }>
}

function Section({ title, cards }: SectionProps) {
  return (
    <section className="py-8">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <EncyclopediaCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default function TeacherEncyclopedia() {
  const sections = [
    {
      title: "Engaging Group Activities",
      cards: [
        {
          title: "Collaborative Learning",
          subtitle: "Boost engagement through teamwork",
          imageUrl: "https://media.istockphoto.com/id/1070519266/vector/discussion-and-communication-in-the-office.jpg?s=612x612&w=0&k=20&c=IkTrf2AMUQhV6BctkCyHqjymmS8LSwI6tAcb94xEdNI=",
          iconColor: "bg-pink-50"
        },
        {
          title: "Role-Playing Exercises",
          subtitle: "Immersive learning experiences",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/007/314/806/non_2x/children-hold-face-masks-expressing-emotions-and-change-mood-emotional-intellect-education-learn-control-emotion-play-role-boy-and-girl-choice-emoticon-on-plate-illustration-vector.jpg",
          iconColor: "bg-green-50"
        },
        {
          title: "Educational Games",
          subtitle: "Make learning fun and interactive",
          imageUrl: "https://img.freepik.com/free-vector/cross-platform-play-abstract-concept-illustration_335657-3727.jpg",
          iconColor: "bg-purple-50"
        }
      ]
    },
    {
      title: "Teaching Methodologies",
      cards: [
        {
          title: "Flipped Classroom",
          subtitle: "Reverse traditional learning environments",
          imageUrl: "https://media.istockphoto.com/id/1216252489/vector/online-distance-school-teacher-and-students-blended-and-flipped-learning-education-concept.jpg?s=612x612&w=0&k=20&c=SlrmYYs2SBtyWlcpBWBHaccKQimiXBwEyz1ByMI6WYs=",
          iconColor: "bg-blue-50"
        },
        {
          title: "Project-Based Learning",
          subtitle: "Hands-on, real-world applications",
          imageUrl: "https://www.graphicpear.com/wp-content/uploads/2022/11/Project-Management-Illustration.jpg",
          iconColor: "bg-yellow-50"
        },
        {
          title: "Differentiated Instruction",
          subtitle: "Tailored teaching for diverse learners",
          imageUrl: "https://img.freepik.com/free-vector/instruction-manual-concept-illustration_114360-2929.jpg",
          iconColor: "bg-orange-50"
        }
      ]
    },
    {
      title: "Top Educators Framework",
      cards: [
        {
          title: "Freire's Critical Pedagogy",
          subtitle: "Education as a practice for freedom",
          imageUrl: "https://www.chapman.edu/library/_files/images/paulo_freire.jpg",
          iconColor: "bg-red-50"
        },
        {
          title: "Gardner's Multiple Intelligences",
          subtitle: "Diverse approaches to understanding",
          imageUrl: "https://www.gse.harvard.edu/sites/default/files/styles/1x1__focal_point_scale_and_crop__lg/public/1500x1000-howard-gardner.jpg?h=f76aefa8&itok=tBv4v74F",
          iconColor: "bg-teal-50"
        },
        {
          title: "Vygotsky's Zone of Proximal Development",
          subtitle: "Scaffolding for optimal learning",
          imageUrl: "https://s3.eu-central-1.amazonaws.com/studysmarter-mediafiles/media/2133044/summary_images/640px-Lev-Semyonovich-Vygotsky-1896-1934.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OLDUDE42UZHAIET%2F20241120%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241120T170026Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2c45396f58910d757058470d2fe94a8eb03d010db62f90488b5374dff41221ba",
          iconColor: "bg-indigo-50"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="py-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Teacher Encyclopedia</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your comprehensive guide to modern teaching practices
          </p>
        </header>
        <main className="pb-16">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </main>
      </div>
    </div>
  )
}

