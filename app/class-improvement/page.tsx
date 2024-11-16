'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Video, GamepadIcon, FileText, Search, MessageCircle, Users, Lightbulb, ChevronRight } from 'lucide-react'
import '/app/globals.css'

const classData = {
  name: "Introduction to Psychology",
  transcript: "Today, we delved into the fascinating world of psychology, exploring its rich history and the groundbreaking theories that have shaped our understanding of the human mind. We began by tracing the evolution of psychological thought, from the early philosophical musings of ancient civilizations to the scientific approaches of the modern era. Students were particularly engaged when discussing the major schools of thought, including behaviorism, psychoanalysis, and cognitive psychology. We explored how these different perspectives have contributed to our current understanding of human behavior and mental processes. The class then transitioned into a lively debate about the ethical considerations in psychological research, with students sharing thought-provoking examples and personal opinions. This led to a broader discussion about the practical applications of psychology in everyday life, from improving mental health to enhancing workplace productivity. Throughout the session, we emphasized the importance of critical thinking and evidence-based approaches in psychology. The class concluded with a brief overview of upcoming topics and a Q&A session where students raised insightful questions about the day's material.",
  recommendations: {
    rhetoric: [
      { title: "Use Analogies", description: "Incorporate more analogies to explain complex concepts. For example, compare the brain's neural networks to a city's transportation system." },
      { title: "Storytelling", description: "Integrate more real-life stories or case studies to illustrate psychological principles in action." },
      { title: "Interactive Demonstrations", description: "Use live demonstrations or interactive experiments to engage students and make abstract concepts more concrete." }
    ],
    constructivism: [
      { title: "Group Projects", description: "Assign small group projects where students can apply psychological theories to real-world scenarios." },
      { title: "Peer Teaching", description: "Implement a peer teaching system where students take turns explaining concepts to their classmates." },
      { title: "Reflective Journaling", description: "Encourage students to keep a reflective journal to connect course material with their personal experiences." }
    ]
  },
  engagement: [
    { time: '0:00', engagement: 80 },
    { time: '0:15', engagement: 85 },
    { time: '0:30', engagement: 75 },
    { time: '0:45', engagement: 90 },
    { time: '1:00', engagement: 85 },
    { time: '1:15', engagement: 80 },
    { time: '1:30', engagement: 60 },
    { time: '1:45', engagement: 75 },
    { time: '2:00', engagement: 95 },
  ],
  assessmentRecommendations: [
    { icon: <Video className="w-6 h-6" />, title: "Watch TED Talk", description: "Assign students to watch the TED Talk 'The Power of Believing You Can Improve' by Carol Dweck and write a reflection." },
    { icon: <GamepadIcon className="w-6 h-6" />, title: "Psychology Quiz Game", description: "Have students play an online psychology quiz game to reinforce key concepts in a fun, interactive way." },
    { icon: <FileText className="w-6 h-6" />, title: "Read Research Paper", description: "Ask students to read and summarize a recent research paper on cognitive biases in decision-making." },
    { icon: <Search className="w-6 h-6" />, title: "Mini Research Project", description: "Assign a mini research project where students design and conduct a simple psychological experiment." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Online Discussion", description: "Create an online discussion forum where students can debate ethical issues in psychological research." }
  ]
}

export default function ClassImprovement() {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{classData.name} - Improvement Insights</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Class Transcript
              <Dialog open={isTranscriptOpen} onOpenChange={setIsTranscriptOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">See more</Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Full Class Transcript</DialogTitle>
                  </DialogHeader>
                  <p className="mt-4 text-gray-700 leading-relaxed">{classData.transcript}</p>
                </DialogContent>
              </Dialog>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed line-clamp-4">{classData.transcript}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                engagement: {
                  label: "Engagement",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={classData.engagement}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="engagement" stroke="var(--color-engagement)" name="Engagement" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Rhetoric Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {classData.recommendations.rhetoric.map((rec, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{rec.title}</AccordionTrigger>
                  <AccordionContent>{rec.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              Constructivism Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {classData.recommendations.constructivism.map((rec, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{rec.title}</AccordionTrigger>
                  <AccordionContent>{rec.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            Assessment Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classData.assessmentRecommendations.map((rec, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {rec.icon}
                    {rec.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{rec.description}</p>
                </CardContent>
                <div className="p-4 pt-0">
                  <Button variant="outline" className="w-full">
                    Implement
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}