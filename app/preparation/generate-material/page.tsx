import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Calculator } from 'lucide-react'

const materials = [
  {
    id: 1,
    title: "Introduction to Photosynthesis",
    subtitle: "The process of converting light energy to chemical energy",
    subject: "Biology",
    grade: "9th Grade",
    icon: FileText,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 2,
    title: "World War II: Causes and Consequences",
    subtitle: "A comprehensive look at the global conflict",
    subject: "History",
    grade: "11th Grade",
    icon: BookOpen,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Algebraic Equations and Inequalities",
    subtitle: "Solving and graphing linear equations and inequalities",
    subject: "Mathematics",
    grade: "8th Grade",
    icon: Calculator,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
]

export default function MaterialsList() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Generated Materials</h1>
        <Link href="/preparation/generate-material/create">
          <Button>Generate New Material</Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => (
          <div key={material.id} className="relative p-6 rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-3 ${material.color}`}>
                <material.icon className={`w-6 h-6 ${material.iconColor}`} />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">{material.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {material.subtitle}
                </p>
                <div className="pt-2">
                  <p className="text-sm"><strong>Subject:</strong> {material.subject}</p>
                  <p className="text-sm"><strong>Grade:</strong> {material.grade}</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href='/preparation/generate-material/generated'>
                <Button variant="outline" className="w-full">See Material</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

