//   {
//         "id": 1,
//         "name": "John Doe",
//         "picture": "🧑‍🎓",
//         "email": "john@example.com",
//         "days_since_contact": 12,
//         "status": "overdue",
//         "tags": [
//             "college",
//             "close friend"
//         ],
//         "bio": "Met in university. Love hiking together.",
//         "goal": 14,
//         "next_due_date": "2025-07-20"
//     }

import Link from "next/link";

export default function ProfileCard({ user }) {
    return (
        <Link href={`/${user.id}`} className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-4xl">
                {user.picture}
            </div>

            {/* Name */}
            <p className="text-[17px] font-semibold text-gray-900 mt-1">{user.name}</p>

            {/* Timestamp */}
            <p className="text-sm text-gray-400 -mt-1">{user.days_since_contact}d ago</p>

            {/* Family badge */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {
                    user.tags.map((tag, index) => {
                        return (
                            <span key={index} className="bg-green-100
                         text-green-800 text-xs font-medium px-4 py-1 rounded-md tracking-wide">
                                {tag}
                            </span>
                        )
                    })
                }
            </div>


            {/* Overdue badge */}
            <span className="bg-red-400 text-white text-sm font-medium px-5 py-1.5 rounded-full">
                {user.status}
            </span>
        </Link>
    );
}