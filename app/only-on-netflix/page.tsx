"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { tmdb } from "@/lib/tmdb";
const categories = [
  {
    title: "Made in India",
    movies: [
      "Lock Upp",
      "Musafir Cafe",
      "Operation Safed Sagar: The Untold Story of the Kargil War",
      "Taskaree: The Smuggler's Web",
      "Ikka",
      "Delhi Crime",
      "Kurukshetra",
      "Khakee: The Bihar Chapter",
      "Glory",
      "Mismatched",
      "Maamla Legal Hai",
      "The Ba***ds of Bollywood",
      "Super Subbu",
      "Maa Behen",
      "The Royals",
      "The Railway Men",
      "Phir Aayi Hasseen Dillruba",
      "IC 814: The Kandahar Hijack",
      "Single Papa",
      "Jamtara - Sabka Number Ayega",
      "Saare Jahan Se Accha",
      "Aranyak",
      "Heeramandi: The Diamond Bazaar",
      "Ginny Weds Sunny",
      "Dhoom Dhaam",
      "Khakee: The Bengal Chapter",
      "Kohrra",
      "Kota Factory",
      "Mission Majnu",
      "She",
      "Tribhuvan Mishra CA Topper",
      "Inspector Zende",
      "Khufiya",
      "Rana Naidu",
      "Raat Akeli Hai",
      "Sikandar Ka Muqaddar",
      "Toaster",
    ],
  },

  {
    title: "Made in Korea",
    movies: [
      "Maamla Legal Hai",
      "The Ba***ds of Bollywood",
      "Super Subbu",
      "Maa Behen",
      "The Royals",
      "The Railway Men",
      "Phir Aayi Hasseen Dillruba",
      "IC 814: The Kandahar Hijack",
      "Single Papa",
      "Jamtara",
      "Saare Jahan Se Accha",
      "Aranyak",
      "Heeramandi",
      "Ginny Weds Sunny",
      "Dhoom Dhaam",
      "Kohrra",
      "Kota Factory",
      "Mission Majnu",
      "She",
    ],
  },

  {
    title: "Your Next Watch",
    movies: [
      "My Life With the Walter Boys",
      "Money Heist",
      "Teach You a Lesson",
      "Stranger Things",
      "Avatar: The Last Airbender",
      "Spooky in Love",
      "Taskaree: The Smuggler's Web",
      "Wednesday",
      "ONE PIECE",
      "All of Us Are Dead",
      "Delhi Crime",
      "Squid Game",
      "King the Land",
      "Our Sticky Love",
      "When Life Gives You Tangerines",
      "Glory",
      "Kurukshetra",
      "Bon Appétit, Your Majesty",
      "Mismatched",
      "War Machine",
      "Lucifer",
      "Bloodhounds",
      "The Night Agent",
      "My Demon",
      "Business Proposal",
      "Alice in Borderland",
      "Jamtara",
    ],
  },

  {
    title: "Hollywood Movies",
    movies: [
      "War Machine",
      "The Rip",
      "The Last House",
      "72 HOURS",
      "Frankenstein",
      "Extraction 2",
      "The Rip",
      "Back in Action",
      "Rebel Ridge",
      "Apex",
      "The Mother",
      "The Gray Man",
      "Atlas",
      "The Life List",
      "Office Romance",
      "Red Notice",
      "Havoc",
      "Lift",
      "Damsel",
      "Army of Thieves",
      "My Oxford Year",
      "Carry-On",
      "Enola Holmes",
      "The Adam Project",
      "The Old Guard",
      "Heart of Stone",
      "6 Underground",
      "Army of the Dead",
    ],
  },

  {
    title: "New on Netflix",
    movies: [
      "Lock Upp",
      "Operation Safed Sagar",
      "Our Sticky Love",
      "My Life With the Walter Boys",
      "The Last House",
      "THE RIBBON HERO",
      "Ricky Gervais Alley Cats",
      "Let's Marry Harry",
      "One Hundred Years of Solitude",
      "Badly in Love",
      "Inside The Trustor Scandal",
      "Storm on Sesame Street",
      "1670",
      "Death Inc.",
      "Musafir Cafe",
      "Teach You a Lesson",
      "WWE SummerSlam",
      "Avatar: The Last Airbender",
      "Ikka",
      "Agent Kim Reactivated",
      "Spooky in Love",
      "The East Palace",
      "Super Subbu",
      "Maa Behen",
      "Elite Force",
      "Voicemails for Isabelle",
      "Enola Holmes",
      "Desi Bling",
    ],
  },

  {
    title: "K-Dramas",
    movies: [
      "Agent Kim Reactivated",
      "King the Land",
      "Bon Appétit, Your Majesty",
      "When Life Gives You Tangerines",
      "All of Us Are Dead",
      "Squid Game",
      "My Demon",
      "Business Proposal",
      "Can This Love Be Translated?",
      "The King: Eternal Monarch",
      "The East Palace",
      "Bloodhounds",
      "Queen of Tears",
      "Crash Landing on You",
      "Weak Hero",
      "Beyond the Bar",
      "Vincenzo",
      "Alchemy of Souls",
      "Destined with You",
      "It's Okay to Not Be Okay",
      "Extraordinary Attorney Woo",
      "Strong Girl Nam-soon",
      "The Glory",
      "Sweet Home",
      "Start-Up",
      "Love Next Door",
      "Hometown Cha-Cha-Cha",
      "Vincenzo",
    ],
  },

  {
    title: "Comedy Movies",
    movies: [
      "Swapped",
      "Inspector Zende",
      "Dhoom Dhaam",
      "Maa Behen",
      "Ginny Weds Sunny",
      "Toaster",
      "Back in Action",
      "Red Notice",
      "Kathal - A Jackfruit Mystery",
      "In Your Dreams",
      "Aap Jaisa Koi",
      "Love Untangled",
      "We Can Be Heroes",
      "My Oxford Year",
      "KPop Demon Hunters",
      "The Adam Project",
      "Lift",
      "Army of Thieves",
      "Nadaaniyan",
      "Minnal Murali",
      "Darlings",
      "Pagglait",
      "Family Pack",
      "Wild Wild Punjab",
      "Me Time",
      "Ludo",
      "Wish Dragon",
      "Leo",
    ],
  },

  {
    title: "Action Movies",
    movies: [
      "The Great Flood",
      "Jewel Thief - The Heist Begins",
      "The Rip",
      "Extraction 2",
      "The Debt Collector",
      "Apex",
      "Troll 2",
      "Back in Action",
      "Red Notice",
      "Mission Majnu",
      "The Gray Man",
      "Atlas",
      "Bullet Train Explosion",
      "Troll",
      "Lift",
      "Minnal Murali",
      "The Mother",
      "The Adam Project",
      "Havoc",
      "6 Underground",
      "Demon City",
      "Extraction",
      "Badland Hunters",
      "The Old Guard",
      "K.O.",
      "Rebel Moon",
      "Heart of Stone",
      "Officer Black Belt",
      "Triple Frontier",
    ],
  },

  {
    title: "Epic Worlds",
    movies: [
      "ONE PIECE",
      "The King: Eternal Monarch",
      "Locke & Key",
      "The Witcher",
      "Genie, Make a Wish",
      "The Sandman",
      "Troll",
      "Troll 2",
      "Sweet Tooth",
      "Shadow and Bone",
      "Ragnarok",
      "3 Body Problem",
      "Mowgli: Legend of the Jungle",
      "The School for Good and Evil",
      "Damsel",
      "Family Pack",
      "Cursed",
      "Resident Evil",
      "Rebel Moon",
      "The Adam Project",
      "Yu Yu Hakusho",
      "Outside the Wire",
      "Warrior Nun",
      "V Wars",
      "Black Knight",
      "Bright",
      "The Wandering Earth",
    ],
  },

  {
    title: "Indian Movies",
    movies: [
      "Made in Korea",
      "KARTAVYA",
      "Sector 36",
      "Khufiya",
      "Phir Aayi Hasseen Dillruba",
      "Mission Majnu",
      "Baramulla",
      "Dhoom Dhaam",
      "Kathal - A Jackfruit Mystery",
      "Maharaj",
      "Raat Akeli Hai",
      "Accused",
      "Bulbbul",
      "Do Patti",
      "Sikandar Ka Muqaddar",
      "Aap Jaisa Koi",
      "Haseen Dillruba",
      "Jaane Jaan",
      "Bhakshak",
      "Gunjan Saxena",
      "Nadaaniyan",
      "Kho Gaye Hum Kahan",
      "Darlings",
      "Ludo",
      "Minnal Murali",
      "Monica, O My Darling",
      "Wild Wild Punjab",
      "Drive",
      "Jaadugar",
    ],
  },

  {
    title: "Suspenseful Movies",
    movies: [
      "Sikandar Ka Muqaddar",
      "Rebel Ridge",
      "Raat Akeli Hai",
      "Accused",
      "Troll 2",
      "Do Patti",
      "Mission Majnu",
      "The Gray Man",
      "Fall for Me",
      "Jaane Jaan",
      "The Elixir",
      "Lift",
      "Enola Holmes",
      "Troll",
      "Carry-On",
      "Army of Thieves",
      "The Mother",
      "Leave the World Behind",
      "Damsel",
      "Nowhere",
      "Desire",
      "The Call",
      "The Woman in Cabin 10",
      "Under Paris",
      "Run",
      "The Killer",
      "The Silence",
      "Triple Frontier",
      "Murder Mystery 2",
    ],
  },

  {
    title: "Horror Movies",
    movies: [
      "Baramulla",
      "Bulbbul",
      "The Elixir",
      "Day Shift",
      "Sister Death",
      "Army of the Dead",
      "Ziam",
      "Run",
      "Under Paris",
      "The Silence",
      "No One Gets Out Alive",
      "The 8th Night",
      "Incantation",
      "Zom 100",
      "Fear Street",
      "The Deliverance",
      "The Ritual",
      "The Babysitter",
      "In the Tall Grass",
      "Viking Wolf",
      "Texas Chainsaw Massacre",
      "#Alive",
      "Blood Red Sky",
      "Bird Box",
      "Time Cut",
      "Apostle",
      "Death Note",
      "Eli",
      "The Privilege",
    ],
  },

  {
    title: "Romantic Comedies",
    movies: [
      "Voicemails for Isabelle",
      "Office Romance",
      "Love Untangled",
      "People We Meet on Vacation",
      "My Oxford Year",
      "Aap Jaisa Koi",
      "Meenakshi Sundareshwar",
      "Nadaaniyan",
      "The Royal Treatment",
      "Lust Stories 2",
      "Your Place or Mine",
      "The Perfect Date",
      "Champagne Problems",
      "The Kissing Booth",
      "Kinda Pregnant",
      "The Wrong Paris",
      "The Princess Switch",
      "To All the Boys I've Loved Before",
      "Set It Up",
      "Tall Girl",
      "Falling Inn Love",
      "Love Per Square Foot",
      "Wedding Season",
      "Irish Wish",
      "The Out-Laws",
      "A Family Affair",
      "Hit Man",
      "Love in the Villa",
      "Love & Gelato",
      "Love Hard",
    ],
  },

  {
    title: "Blockbuster Movies",
    movies: [
      "Enola Holmes",
      "Back in Action",
      "Red Notice",
      "Lift",
      "The Gray Man",
      "Murder Mystery",
      "Mowgli: Legend of the Jungle",
      "Extraction",
      "Rebel Moon",
      "The Old Guard",
      "Carry-On",
      "6 Underground",
      "Heart of Stone",
      "Triple Frontier",
      "The Adam Project",
      "Project Power",
      "Murder Mystery 2",
      "The Electric State",
      "Jagame Thandhiram",
      "The Union",
      "Don't Look Up",
      "Glass Onion",
      "Bird Box",
      "Happy Gilmore 2",
      "Bright",
      "Love and Monsters",
    ],
  },

  {
    title: "Action Thrillers",
    movies: [
      "The Mother",
      "Bullet Train Explosion",
      "Humint",
      "Extraction",
      "Havoc",
      "The Old Guard",
      "The Old Guard 2",
      "6 Underground",
      "Demon City",
      "Last Bullet",
      "Officer Black Belt",
      "Triple Frontier",
      "Interceptor",
      "Counterattack",
      "Sweet Girl",
      "Project Power",
      "Kate",
      "Lost Bullet 2",
      "AKA",
      "Carter",
      "Silverton Siege",
      "Lost Bullet",
      "Polar",
      "Spectral",
      "The Wages of Fear",
      "Lou",
      "Furie",
      "Ballerina",
      "Mantis",
      "Believer 2",
    ],
  },

  {
    title: "Crime TV Shows",
    movies: [
      "Wednesday",
      "Bloodhounds",
      "Lucifer",
      "Khakee: The Bihar Chapter",
      "The Lincoln Lawyer",
      "Glory",
      "I Will Find You",
      "The Apartment Job",
      "Aranyak",
      "Jamtara",
      "Lupin",
      "Khakee: The Bengal Chapter",
      "Criminal Code",
      "Narcos",
      "Kohrra",
      "She",
      "Sacred Games",
      "Peaky Blinders",
      "Dark",
      "UNTAMED",
      "Dabba Cartel",
      "CAT",
      "Adolescence",
      "The Gentlemen",
      "Ozark",
      "Crooks",
      "Trigger",
      "Guns & Gulaabs",
      "Mai",
      "Mandala Murders",
    ],
  },
];



export default function OnlyOnNetflix() {
  const router = useRouter();
  const [posters, setPosters] = useState<Record<string, string>>({});
  useEffect(() => {
    const loadPosters = async () => {
      const allMovies = categories.flatMap(
        (category) => category.movies
      );

      // Duplicate movie names remove
      const uniqueMovies = [...new Set(allMovies)];

      const posterMap: Record<string, string> = {};

      // TMDB API calls limited batches
      for (let i = 0; i < uniqueMovies.length; i += 5) {
        const batch = uniqueMovies.slice(i, i + 5);

        await Promise.all(
          batch.map(async (title) => {
            try {
              const response = await tmdb.get("/search/multi", {
                params: {
                  query: title,
                  page: 1,
                },
              });

              const result = response.data.results?.find(
                (item: any) =>
                  item.poster_path &&
                  (item.media_type === "movie" ||
                    item.media_type === "tv")
              );

              if (result?.poster_path) {
                posterMap[title] =
                  `https://image.tmdb.org/t/p/w500${result.poster_path}`;
              }
            } catch (error) {
              console.error(
                `TMDB error for ${title}:`,
                error
              );
            }
          })
        );

        setPosters({ ...posterMap });
      }
    };

    loadPosters();
  }, []);

  return (
    <div className="only-page">

      {/* HEADER */}

      <header className="only-header">

        <div
          className="only-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="only-header-buttons">

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

        </div>

      </header>

      {/* HERO */}

      <section className="only-hero">

        <div className="only-hero-content">

          <span className="only-small-title">
            NETFLIX
          </span>

          <h1>Netflix Originals</h1>

          <p>
            Netflix is the home of amazing original
            programming that you can’t find anywhere else.
            Movies, TV shows, specials and more, it’s all
            tailored specifically to you.
          </p>

          <h2>Endless entertainment starting at ₹149</h2>

          <p className="new-members">
            New members only. Terms below.
          </p>

          <button
            className="only-get-started"
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>

        </div>

      </section>

      {/* MOVIE CATEGORIES */}

      <main className="only-content">

        {categories.map((category) => (

          <section
            className="only-row"
            key={category.title}
          >

            <h2>{category.title}</h2>

            <div className="only-movie-row">

              {category.movies.map((movie, index) => (

                <div
                  className="only-movie-card"
                  key={`${movie}-${index}`}
                  onClick={() => router.push("/browse")}
                >

                  <div className="only-number">
                    {index + 1}
                  </div>

                  <div className="only-poster">

  {posters[movie] ? (
    <img
      src={posters[movie]}
      alt={movie}
      className="only-poster-image"
    />
  ) : (
    <div className="poster-placeholder">
      <span>NETFLIX</span>
      <strong>{movie}</strong>
    </div>
  )}

</div>

                </div>

              ))}

            </div>

          </section>

        ))}

      </main>

      {/* PLANS */}

      <section className="only-plans">

        <h2>A plan to suit your needs</h2>

        <div className="plan-grid">

          <div className="only-plan">
            <h3>Mobile</h3>
            <b>480p</b>
            <p>Fair video quality</p>
            <p>For your phone or tablet</p>
            <strong>₹0 for 14 days</strong>
            <span>then ₹149/mo</span>
          </div>

          <div className="only-plan">
            <h3>Basic</h3>
            <b>720p</b>
            <p>Good video quality</p>
            <p>For your phone, tablet, laptop and TV</p>
            <strong>₹0 for 14 days</strong>
            <span>then ₹199/mo</span>
          </div>

          <div className="only-plan popular">
            <label>Most Popular</label>
            <h3>Standard</h3>
            <b>1080p</b>
            <p>Great video quality</p>
            <p>For your phone, tablet, laptop and TV</p>
            <strong>₹0 for 14 days</strong>
            <span>then ₹499/mo</span>
          </div>

          <div className="only-plan">
            <h3>Premium</h3>
            <b>4K + HDR</b>
            <p>Best video quality</p>
            <p>Immersive sound (spatial audio)</p>
            <p>For your phone, tablet, laptop and TV</p>
            <strong>₹0 for 14 days</strong>
            <span>then ₹649/mo</span>
          </div>

        </div>

      </section>

      {/* TUDUM */}

      <section className="tudum-section">

        <h2>
          Discover your next favourites, plus new releases
          every week
        </h2>

        <p>
          Read about Netflix shows and movies and watch
          bonus videos on Tudum.com.
        </p>

      </section>

      {/* FOOTER */}

      <footer className="only-footer">

        <p>
          This offer is only valid for new members. This offer
          is non-transferrable. You agree that Netflix will
          charge the membership fee at the end of the free
          trial to your payment method and will automatically
          continue your membership until you cancel.
        </p>

        <p>Questions? Contact us.</p>

        <div className="only-footer-links">

          <button onClick={() => router.push("/faq")}>
            FAQ
          </button>

          <button onClick={() => router.push("/help")}>
            Help Centre
          </button>

          <button onClick={() => router.push("/account")}>
            Account
          </button>

          <button
            onClick={() =>
              router.push("/media-center")
            }
          >
            Media Centre
          </button>

          <button
            onClick={() =>
              router.push("/investor-relations")
            }
          >
            Investor Relations
          </button>

          <button onClick={() => router.push("/jobs")}>
            Jobs
          </button>

          <button
            onClick={() =>
              router.push("/ways-to-watch")
            }
          >
            Ways to Watch
          </button>

          <button onClick={() => router.push("/terms")}>
            Terms of Use
          </button>

          <button onClick={() => router.push("/privacy")}>
            Privacy
          </button>

          <button
            onClick={() =>
              router.push("/cookie-preferences")
            }
          >
            Cookie Preferences
          </button>

          <button
            onClick={() =>
              router.push("/corporate-information")
            }
          >
            Corporate Information
          </button>

          <button onClick={() => router.push("/contact")}>
            Contact Us
          </button>

          <button
            onClick={() =>
              router.push("/speed-test")
            }
          >
            Speed Test
          </button>

          <button
            onClick={() =>
              router.push("/legal-notices")
            }
          >
            Legal Notices
          </button>

        </div>

        <select defaultValue="English">
          <option>English</option>
          <option>हिन्दी</option>
          <option>తెలుగు</option>
        </select>

        <h3>Netflix India</h3>

      </footer>

    </div>
  );
}