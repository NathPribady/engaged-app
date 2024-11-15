'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { CheckCircle, AlertCircle, XCircle, BarChart2, Users, MessageCircle, PieChart, Award } from 'lucide-react'
import '/app/globals.css';

const exampleTranscript = [
  { time: '10:00:05', text: "Good morning, class! Today we're going to discuss the importance of data structures in computer science." },
  { time: '10:00:15', text: "Let's start by talking about arrays. Can anyone tell me what an array is?" },
  { time: '10:00:30', text: "Great answer, Sarah! An array is indeed a collection of elements stored at contiguous memory locations." },
  { time: '10:00:45', text: "Now, let's move on to linked lists. How do they differ from arrays?" },
  { time: '10:01:00', text: "Excellent point, John! Unlike arrays, linked lists don't require contiguous memory allocation." },
]

const engagementActivities = [
  {
    title: "Political Discussion",
    description: "Ask the students what they think about the latest election results!",
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Art Appreciation Poll",
    description: "Create a live poll on who likes this painting!",
    icon: <PieChart className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Educational Purpose Debate",
    description: "Make a fishbowl group activity to discuss the purpose of education.",
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Historical Event Quiz",
    description: "Launch a quick quiz about a recent historical event!",
    icon: <Award className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Data Visualization Exercise",
    description: "Show a complex graph and ask students to interpret the data.",
    icon: <BarChart2 className="w-6 h-6 text-red-500" />,
  },
]

export default function LiveClassContent() {
  const [transcript, setTranscript] = useState(exampleTranscript)
  const [engagementLevel, setEngagementLevel] = useState<'high' | 'medium' | 'low'>('high')
  const [showDialog, setShowDialog] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState(engagementActivities[0])

  useEffect(() => {
    const transcriptionInterval = setInterval(() => {
      setTranscript(prev => [...prev, { 
        time: new Date().toLocaleTimeString(), 
        text: `New transcription at ${new Date().toLocaleTimeString()}` 
      }])
    }, 5000)

    const engagementInterval = setInterval(() => {
      const random = Math.random()
      if (random > 0.7) setEngagementLevel('high')
      else if (random > 0.3) setEngagementLevel('medium')
      else setEngagementLevel('low')
    }, 10000)

    const activityInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * engagementActivities.length)
      setSelectedActivity(engagementActivities[randomIndex])
      setShowDialog(true)
    }, 5000)

    return () => {
      clearInterval(transcriptionInterval)
      clearInterval(engagementInterval)
      clearInterval(activityInterval)
    }
  }, [])

  const getEngagementIcon = () => {
    switch (engagementLevel) {
      case 'high': return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'medium': return <AlertCircle className="w-6 h-6 text-yellow-500" />
      case 'low': return <XCircle className="w-6 h-6 text-red-500" />
    }
  }

  const getEngagementColor = () => {
    switch (engagementLevel) {
      case 'high': return 'bg-green-100 border-green-500 text-green-700'
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-700'
      case 'low': return 'bg-red-100 border-red-500 text-red-700'
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Live Class</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
          <CardHeader>
            <CardTitle>Engagement Monitor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`flex items-center justify-between p-4 border rounded-lg ${getEngagementColor()}`}>
              <div className="flex items-center">
                {getEngagementIcon()}
                <span className="ml-2 font-semibold">
                  {engagementLevel === 'high' && 'Students are highly engaged'}
                  {engagementLevel === 'medium' && 'Students are moderately engaged'}
                  {engagementLevel === 'low' && 'Students seem disengaged'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Real-time Transcript</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] overflow-y-auto">
            {transcript.map((line, index) => (
              <p key={index} className="mb-2">
                <span className="font-semibold">{line.time}:</span> {line.text}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {selectedActivity.icon}
              {selectedActivity.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedActivity.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}