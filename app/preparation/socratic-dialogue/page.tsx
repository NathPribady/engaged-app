'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, Computer } from 'lucide-react'
import Link from 'next/link'

// Define types
type MessageRole = 'user' | 'assistant'

interface Message {
  role: MessageRole
  content: string
  timestamp: number
}

// Dummy data for past conversations
const pastConversations = [
  { id: 1, topic: "Classical Economics", date: "2023-05-15" },
  { id: 2, topic: "Keynesian Theory", date: "2023-05-20" },
  { id: 3, topic: "Monetarism", date: "2023-05-25" },
  { id: 4, topic: "Austrian School", date: "2023-05-30" },
  { id: 5, topic: "Behavioral Economics", date: "2023-06-05" },
]

// Socratic dialogue on Acemoglu's theory of institutions
const acemogluDialogue = [
  { question: "What are institutions according to Acemoglu?", answers: ["Rules that shape economic incentives", "Cultural norms", "Government structures"] },
  { question: "How do institutions affect economic development?", answers: ["By shaping incentives", "Through resource allocation", "By influencing innovation"] },
  { question: "What's the difference between inclusive and extractive institutions?", answers: ["Inclusive benefit everyone, extractive benefit elites", "Inclusive are democratic, extractive are authoritarian", "Inclusive promote growth, extractive hinder it"] },
  { question: "Can you give an example of an inclusive economic institution?", answers: ["Property rights protection", "Free market economy", "Equal access to education"] },
  { question: "How do extractive institutions hinder economic growth?", answers: ["By concentrating power and wealth", "By discouraging innovation", "By creating instability"] },
  { question: "What role does history play in institutional development?", answers: ["It shapes initial conditions", "It creates path dependence", "It influences cultural norms"] },
  { question: "How can countries transition from extractive to inclusive institutions?", answers: ["Through gradual reforms", "By empowering diverse groups", "Through economic crises forcing change"] },
  { question: "What criticisms exist for Acemoglu's theory?", answers: ["It oversimplifies complex issues", "It underestimates cultural factors", "It doesn't fully explain all cases"] },
  { question: "How does Acemoglu's theory relate to other development theories?", answers: ["It complements modernization theory", "It challenges dependency theory", "It builds on institutional economics"] },
  { question: "How can students apply this theory to analyze current events?", answers: ["By examining institutional changes in countries", "By comparing institutions across nations", "By analyzing economic outcomes and their institutional causes"] },
]

export default function SocraticMethodChatbot() {
    const [messages, setMessages] = useState<Message[]>([
      { 
        role: 'assistant', 
        content: "Welcome! I'm here to help you prepare for teaching. What do you want to teach?", 
        timestamp: Date.now() 
      }
    ])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
    const [userInput, setUserInput] = useState('')
    const [isAcemogluMode, setIsAcemogluMode] = useState(false)
    const scrollAreaRef = useRef<HTMLDivElement>(null)
  
    const handleUserResponse = () => {
      if (userInput.trim() === '') return
  
      const newMessages: Message[] = [
        ...messages,
        { role: 'user', content: userInput, timestamp: Date.now() },
      ]
  
      setMessages(newMessages)
      setUserInput('')
  
      // Simulate Socrates' response
      setTimeout(() => {
        if (!isAcemogluMode) {
          setMessages([...newMessages, { 
            role: 'assistant', 
            content: "Great choice! Let's discuss Acemoglu's theory of institutions to help you prepare. " + acemogluDialogue[0].question, 
            timestamp: Date.now() 
          }])
          setIsAcemogluMode(true)
          setCurrentQuestionIndex(0)
        } else {
          const nextQuestion = acemogluDialogue[currentQuestionIndex + 1]
          if (nextQuestion) {
            setMessages([...newMessages, { 
              role: 'assistant', 
              content: nextQuestion.question, 
              timestamp: Date.now() 
            }])
            setCurrentQuestionIndex(currentQuestionIndex + 1)
          } else {
            setMessages([...newMessages, { 
              role: 'assistant', 
              content: "Excellent! You've demonstrated a deep understanding of Acemoglu's theory of institutions. Remember to apply this knowledge when analyzing economic development and policy decisions.", 
              timestamp: Date.now() 
            }])
          }
        }
      }, 1000)
    }
  
    useEffect(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
      }, [messages])

    return (
        <div className="min-h-screen bg-white">
          <main className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6">
              {/* Chat Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Computer className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Socratic Method Teaching Assistant</h2>
                </div>
    
                <ScrollArea className="h-[500px] scroll-area" ref={scrollAreaRef}>
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                      {message.role === 'assistant' && (
                        <Avatar className="w-8 h-8 mr-2">
                          <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`rounded-lg p-3 max-w-[80%] ${
                        message.role === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
    
                <div className="flex gap-2">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUserResponse()}
                    placeholder="Type your response..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleUserResponse}
                    size="icon" 
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.2031 7.95693C14.3836 7.87668 14.5 7.69762 14.5 7.50002C14.5 7.30242 14.3836 7.12336 14.2031 7.04311L1.20308 1.04312ZM4.73275 7.00002L2.19591 2.7365L12.9023 7.50002L2.19591 12.2635L4.73275 8.00002H9C9.27614 8.00002 9.5 7.77616 9.5 7.50002C9.5 7.22388 9.27614 7.00002 9 7.00002H4.73275Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                    </svg>
                  </Button>
                </div>
              </div>
    
              {/* Past Conversations */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Past Conversations</h2>
                </div>
                <div className="space-y-4">
                  {pastConversations.map((conversation) => (
                    <div key={conversation.id} className="space-y-1">
                      <Link 
                        href="#" 
                        className="text-blue-600 hover:underline block"
                      >
                        {conversation.topic}
                      </Link>
                      <div className="text-sm text-gray-500">
                        {conversation.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }