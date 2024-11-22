import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileText, Microscope, Globe, Calculator, Beaker, PenTool } from 'lucide-react'

const slideDecks = [
  {
    id: 1,
    title: "Ecosystems and Biodiversity",
    subtitle: "Exploring the interconnectedness of living organisms and their environment",
    subject: "Biology",
    grade: "9th Grade",
    slides: 24,
    icon: Microscope,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 2,
    title: "Ancient Civilizations: Egypt and Mesopotamia",
    subtitle: "A comparative study of early human societies",
    subject: "History",
    grade: "7th Grade",
    slides: 32,
    icon: Globe,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: 3,
    title: "Introduction to Trigonometry",
    subtitle: "Understanding sine, cosine, and tangent functions",
    subject: "Mathematics",
    grade: "10th Grade",
    slides: 28,
    icon: Calculator,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    title: "States of Matter",
    subtitle: "Exploring solids, liquids, gases, and plasma",
    subject: "Chemistry",
    grade: "8th Grade",
    slides: 20,
    icon: Beaker,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 5,
    title: "Shakespeare's Romeo and Juliet",
    subtitle: "Analyzing themes, characters, and literary devices",
    subject: "English Literature",
    grade: "9th Grade",
    slides: 36,
    icon: PenTool,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
]

export default function ReviewSlidesList() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Review My Slides</h1>
        <Link href="/preparation/review-slides/create">
          <Button>Upload New Slides</Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {slideDecks.map((deck) => (
          <div key={deck.id} className="relative p-6 rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-3 ${deck.color}`}>
                <deck.icon className={`w-6 h-6 ${deck.iconColor}`} />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">{deck.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {deck.subtitle}
                </p>
                <div className="pt-2 space-y-1">
                  <p className="text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <strong>Subject:</strong> {deck.subject}
                  </p>
                  <p className="text-sm flex items-center">
                    <PenTool className="w-4 h-4 mr-2" />
                    <strong>Grade:</strong> {deck.grade}
                  </p>
                  <p className="text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <strong>Slides:</strong> {deck.slides}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/preparation/review-slides/generated`}>
                <Button variant="outline" className="w-full">Review Slides</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

