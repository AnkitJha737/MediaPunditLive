import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

interface JobApplicationModalProps {
    role: string;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ role }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary text-white hover:bg-primary/90" size="sm">
                    Apply Now
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Apply for {role}</DialogTitle>
                    <DialogDescription>
                        Submit your details and we’ll be in touch if you’re shortlisted.
                    </DialogDescription>
                </DialogHeader>

                <form
                    action="https://formspree.io/f/xnnzqdba"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={() => {
                        toast({
                            title: "Application submitted!",
                            description: "We’ve received your application. Our team will be in touch soon.",
                        });
                        setTimeout(() => setIsOpen(false), 2000);
                    }}
                    className="space-y-4"
                >
                    <input type="hidden" name="_subject" value={`Application for ${role} via Apply Now`} />
                    <input type="hidden" name="_redirect" value="about:blank" />

                    <div>
                        <Label htmlFor="job-title">Position</Label>
                        <Input id="job-title" name="Position" value={role} readOnly />
                    </div>

                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="Full Name" required placeholder="Ashok Kumar" />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="Email" type="email" required placeholder="ashok@example.com" />
                    </div>

                    <div>
                        <Label htmlFor="portfolio">Portfolio / LinkedIn</Label>
                        <Input id="portfolio" name="Portfolio" type="url" placeholder="https://yourportfolio.com" />
                    </div>

                    <div>
                        <Label htmlFor="message">Tell us about yourself</Label>
                        <Textarea
                            id="message"
                            name="Message"
                            rows={4}
                            placeholder="What makes you a good fit?"
                        />
                    </div>

                    <div className="text-right pt-2">
                        <Button type="submit">Submit Application</Button>
                    </div>
                </form>

                {/* hidden iframe to suppress redirect */}
                <iframe name="hidden_iframe" style={{ display: "none" }} />
            </DialogContent>
        </Dialog>
    );
};

export default JobApplicationModal;