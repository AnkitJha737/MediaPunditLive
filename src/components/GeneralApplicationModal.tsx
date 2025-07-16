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
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const GeneralApplicationModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-red-600 text-white hover:bg-red-700">
                    Share Your Profile
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>General Application</DialogTitle>
                    <DialogDescription>
                        Fill this short form and we’ll reach out if there’s a role that fits.
                    </DialogDescription>
                </DialogHeader>

                <form
                    action="https://formspree.io/f/xnnzqdba"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={() => {
                        setTimeout(() => {
                            toast({
                                title: "Application submitted!",
                                description: "Thanks for sharing your profile. We’ll be in touch soon.",
                            });
                            setIsOpen(false);
                        }, 1500);
                    }}
                    className="space-y-4"
                >
                    <input type="hidden" name="_subject" value="General Application Submission" />
                    <input type="hidden" name="_redirect" value="about:blank" />

                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="Full Name"
                            required
                            placeholder="Ashok Kumar"
                            className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="Email"
                            type="email"
                            required
                            placeholder="ashok@example.com"
                            className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="portfolio">Portfolio / LinkedIn</Label>
                        <Input
                            id="portfolio"
                            name="Portfolio"
                            type="url"
                            placeholder="https://yourportfolio.com"
                            className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="department">Department</Label>
                        <select
                            id="department"
                            name="Department"
                            required
                            className="w-full border rounded-md px-3 py-2 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1"
                        >
                            <option value="">Select Department</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Development">Development</option>
                            <option value="Business">Business</option>
                            <option value="HR">HR</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="message">Tell us about yourself</Label>
                        <Textarea
                            id="message"
                            name="Message"
                            rows={4}
                            placeholder="What makes you a good fit?"
                            className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                    </div>

                    <div className="text-right pt-2">
                        <Button type="submit">Submit Application</Button>
                    </div>
                </form>

                {/* hidden iframe to block Formspree redirect */}
                <iframe name="hidden_iframe" style={{ display: "none" }} />
            </DialogContent>
        </Dialog>
    );
};

export default GeneralApplicationModal;