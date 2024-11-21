import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, GraduationCap } from 'lucide-react'

const lessonPlans = [
  {
    id: 1,
    title: "Photosynthesis in Action",
    subtitle: "Hands-on experiments to understand the process of photosynthesis",
    subject: "Biology",
    grade: "9th Grade",
    duration: "60 minutes",
    icon: BookOpen,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 2,
    title: "Analyzing World War II Propaganda",
    subtitle: "Critical thinking exercise on historical media",
    subject: "History",
    grade: "11th Grade",
    duration: "45 minutes",
    icon: Users,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Real-world Algebra Applications",
    subtitle: "Practical problems solving using algebraic equations",
    subject: "Mathematics",
    grade: "8th Grade",
    duration: "55 minutes",
    icon: GraduationCap,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
]

export default function LessonPlansList() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Generated Lesson Plans</h1>
        <Link href="/generate-lesson-plan">
          <Button>Generate New Lesson Plan</Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessonPlans.map((plan) => (
          <div key={plan.id} className="relative p-6 rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-3 ${plan.color}`}>
                <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">{plan.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.subtitle}
                </p>
                <div className="pt-2 space-y-1">
                  <p className="text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <strong>Subject:</strong> {plan.subject}
                  </p>
                  <p className="text-sm flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <strong>Grade:</strong> {plan.grade}
                  </p>
                  <p className="text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <strong>Duration:</strong> {plan.duration}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/preparation/lesson-plan/generated`}>
                <Button variant="outline" className="w-full">View Lesson Plan</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

