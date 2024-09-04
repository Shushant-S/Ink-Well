import { Appbar } from "../components/Appbar"
import { Footer } from "../components/Footer";
import backgroundImage from "../assets/AboutBackground.png"

export const About = () => {

    const isAuthenticated = localStorage.getItem("token") || "";

    return (
        <div
            className="relative min-h-screen bg-gray-900"
            style={{ backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Appbar isAuthenticated={isAuthenticated} />
            <main className="relative max-w-4xl mx-auto px-4 py-8 bg-gray-900 bg-opacity-50 rounded-lg mt-8">
                <section className="text-white p-6">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Ink Well</h1>
                    <p className="text-lg mb-4">
                        Everyone has a story to tell. Ink Well is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Ink Well is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                    </p>
                    <p className="text-lg mb-4">
                        We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
                    </p>
                    <p className="text-lg mb-4">
                        Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.
                    </p>
                    <p className="text-lg mb-4">
                        Over 100 million people connect and share their wisdom on Ink Well every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
                    </p>
                    <p className="text-lg mb-4">
                        Instead of selling ads or selling your data, we’re supported by a growing community of Ink Well members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
