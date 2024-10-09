import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function BusinessModelCanvas() {
  return (
    <div className="grid grid-cols-5 gap-2 p-4 bg-gray-100 rounded-lg">
      <Card className="bg-blue-50">
        <CardHeader className="font-bold text-sm">Key Partners</CardHeader>
        <CardContent className="text-xs">
          • Speech therapists
          • Disability advocacy groups
          • Healthcare providers
          • Software developers
          • Voice recognition tech companies
          • Research institutions
        </CardContent>
      </Card>
      
      <Card className="bg-green-50">
        <CardHeader className="font-bold text-sm">Key Activities</CardHeader>
        <CardContent className="text-xs">
          • AI/ML algorithm development
          • Voice pattern analysis
          • User testing and feedback
          • App development & updates
          • Building partnerships
          • Customer support
        </CardContent>
      </Card>
      
      <Card className="col-span-1 bg-purple-50">
        <CardHeader className="font-bold text-sm">Value Propositions</CardHeader>
        <CardContent className="text-xs">
          • Real-time speech-to-text translation
          • Improved communication for speech-impaired
          • Customizable to individual speech patterns
          • Enhanced social inclusion
          • Increased independence
          • Reduced communication barriers
        </CardContent>
      </Card>
      
      <Card className="bg-yellow-50">
        <CardHeader className="font-bold text-sm">Customer Relationships</CardHeader>
        <CardContent className="text-xs">
          • Personalized support
          • Community forum
          • Regular check-ins
          • Training sessions
          • Feedback loops
        </CardContent>
      </Card>
      
      <Card className="bg-red-50">
        <CardHeader className="font-bold text-sm">Customer Segments</CardHeader>
        <CardContent className="text-xs">
          Primary:
          • People with speech disabilities
          • Speech disorder patients
          
          Secondary:
          • Healthcare facilities
          • Special education schools
          • Elderly care facilities
        </CardContent>
      </Card>
      
      <Card className="bg-indigo-50">
        <CardHeader className="font-bold text-sm">Key Resources</CardHeader>
        <CardContent className="text-xs">
          • AI/ML engineers
          • Voice recognition technology
          • Patent portfolio
          • User data
          • Cloud infrastructure
          • Medical advisors
        </CardContent>
      </Card>
      
      <Card className="col-span-2 bg-orange-50">
        <CardHeader className="font-bold text-sm">Channels</CardHeader>
        <CardContent className="text-xs">
          • Mobile app stores
          • Web platform
          • Healthcare provider referrals
          • Disability support organizations
          • Social media
          • Medical device distributors
        </CardContent>
      </Card>
      
      <Card className="col-span-2 bg-pink-50">
        <CardHeader className="font-bold text-sm">Cost Structure</CardHeader>
        <CardContent className="text-xs">
          • R&D expenses
          • Software development
          • Cloud hosting
          • Marketing and outreach
          • Customer support
          • Compliance and certifications
        </CardContent>
      </Card>
      
      <Card className="col-span-5 bg-teal-50">
        <CardHeader className="font-bold text-sm">Revenue Streams</CardHeader>
        <CardContent className="text-xs">
          • Subscription model (individual users)
          • Enterprise licensing (healthcare facilities)
          • Premium features
          • API access for third-party integration
          • Partnerships with healthcare providers
          • Potential insurance coverage
        </CardContent>
      </Card>
    </div>
  );
}