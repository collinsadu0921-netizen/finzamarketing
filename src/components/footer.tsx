export function Footer() {
    return (
        <footer className="py-12 border-t bg-muted/20">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold mb-4 text-primary text-lg">Finza</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Automated accounting for modern businesses in Ghana.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-primary">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/features" className="hover:text-primary transition-colors">Features</a></li>
                        <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="/accountants" className="hover:text-primary transition-colors">For Accountants</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-primary">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-primary">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Finza. All rights reserved.
            </div>
        </footer>
    );
}
