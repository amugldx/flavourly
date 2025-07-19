import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Contact Support</h1>
          <p className="text-muted-foreground text-lg">
            Get in touch with our team. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send us a message
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="recipes">Recipe Problems</SelectItem>
                      <SelectItem value="permissions">
                        Permission Issues
                      </SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your issue or question in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@flavourly.com
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground">
                      123 Recipe Street
                      <br />
                      Food City, FC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Common Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Account Issues</h4>
                  <p className="text-xs text-muted-foreground">
                    Problems with login, password reset, or account access.
                  </p>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Recipe Problems</h4>
                  <p className="text-xs text-muted-foreground">
                    Issues with recipe creation, editing, or verification.
                  </p>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">
                    Permission Errors
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Access denied or unauthorized page errors.
                  </p>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">
                    Technical Support
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    App crashes, loading issues, or other technical problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
