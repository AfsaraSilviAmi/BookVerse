import CTASection from "@/components/CTASection";
import ExploreGenres from "@/components/ExploreGenres";
import FeaturedBooks from "@/components/FeaturedBook";
import GenreChart from "@/components/GenreChat";
import Hero from "@/components/Hero";
import PopularAuthors from "@/components/PopularAuthor";
import Testimonials from "@/components/Testimonials";
import WhyChooseBookVerse from "@/components/WhyChooseBookVerse";


export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <FeaturedBooks></FeaturedBooks>
    <GenreChart></GenreChart>
    <WhyChooseBookVerse></WhyChooseBookVerse>
   <ExploreGenres></ExploreGenres>
     <Testimonials></Testimonials>
     <PopularAuthors></PopularAuthors>
     <CTASection></CTASection>
   </div>
  );
}
