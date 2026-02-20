"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function DemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        industry: "",
        email: "",
        phone: "",
        businessSize: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string, name: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        console.log("Form Submitted:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setLoading(false);
        setSuccess(true);
        setFormData({
            name: "",
            businessName: "",
            industry: "",
            email: "",
            phone: "",
            businessSize: "",
            message: "",
        });
    };

    return (
        <main className="min-h-screen bg-secondary/30 py-24 px-6 flex items-center justify-center">
            <div className="w-full max-w-lg bg-background rounded-3xl shadow-xl border border-border/50 p-8 md:p-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-primary mb-2">Book a Demo</h1>
                    <p className="text-muted-foreground">See how Finza can automate your accounting.</p>
                </div>

                {success ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Request Sent!</h3>
                        <p className="text-muted-foreground mb-8">Our team will contact you shortly to schedule your personalized demo.</p>
                        <Button onClick={() => setSuccess(false)} variant="outline">Send Another Request</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="businessName">Business Name</Label>
                            <Input id="businessName" name="businessName" placeholder="Acme Corp" required value={formData.businessName} onChange={handleChange} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="+233..." required value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select onValueChange={(val) => handleSelectChange(val, "industry")} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="service">Service</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="businessSize">Business Size</Label>
                            <Select onValueChange={(val) => handleSelectChange(val, "businessSize")} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1-10">1-10 Employees</SelectItem>
                                    <SelectItem value="11-50">11-50 Employees</SelectItem>
                                    <SelectItem value="51-200">51-200 Employees</SelectItem>
                                    <SelectItem value="200+">200+ Employees</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button type="submit" className="w-full text-lg font-semibold h-12" disabled={loading}>
                            {loading ? "Submitting..." : "Schedule Demo"}
                        </Button>
                    </form>
                )}
            </div>
        </main>
    );
}
