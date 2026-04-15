# 🤝 KeenKeeper

A modern relationship management application that helps you stay connected with friends and loved ones by tracking interactions and providing meaningful insights into your relationships.

## 📋 Description

**Friendship Hub** is a web-based relationship tracking application designed to help users maintain meaningful connections. It allows you to manage a contact list, log various types of interactions (calls, texts, video chats), and visualize interaction patterns through an intuitive analytics dashboard. Never miss important relationships again with goal-based reminders and interaction history.

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) - React-based framework with server-side rendering
- **UI Library**: [React 19](https://react.dev/) - Component-based UI development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Charts & Visualization**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Toast notifications
- **State Management**: React Context API - Built-in state management
- **Linting**: [ESLint](https://eslint.org/) - Code quality tool

## ✨ Key Features

### 1. **Contact Management Dashboard**
   - Browse and manage your entire contact list with detailed profiles
   - View important contact information including relationship goals, status, and interaction history
   - Categorize contacts with tags (family, friends, colleagues, mentors, etc.)
   - Track days since last contact and deadline reminders

### 2. **Interaction Logging System**
   - Log three types of interactions: **Calls**, **Text Messages**, and **Video Chats**
   - Quick check-in buttons on each contact profile for fast logging
   - Automatic timestamping and context storage
   - Complete interaction history visible on timeline

### 3. **Analytics & Insights Dashboard**
   - Beautiful **interactive pie chart** showing interaction breakdown by type
   - Real-time statistics with call, text, and video counts
   - Color-coded visualization for easy pattern recognition
   - Dynamic legend displaying exact interaction metrics
   - Monitor relationship engagement at a glance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd a07-rh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start tracking your relationships!

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint code quality checks

## 📁 Project Structure

```
src/
├── app/              # Next.js pages and layouts
│   ├── (users)/      # Dynamic user profile routes
│   ├── stats/        # Analytics dashboard
│   ├── timeline/     # Interaction history view
│   └── page.jsx      # Home/contacts listing
├── components/       # Reusable React components
│   ├── StatsChart.jsx      # Pie chart visualization
│   ├── TimelineCard.jsx    # Interaction history items
│   ├── ProfileCard.jsx     # Contact profile card
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── context/          # React Context API state
│   └── dataContext.jsx     # Global data state management
└── public/           # Static assets and data
    └── data.json     # Sample contact data
```

## 📝 How to Use

1. **View Contacts**: Browse all your contacts on the home page
2. **Check Profile**: Click on any contact to view their profile and history
3. **Log Interaction**: Use the quick check-in buttons (Call, Text, Video) to record interactions
4. **View Timeline**: Navigate to the Timeline page to see all your interactions
5. **Check Analytics**: Visit the Stats page to see visual breakdown of your interactions

## 🎨 UI/UX Highlights

- Clean, modern interface with responsive design
- Real-time chart updates as you log interactions
- Toast notifications for user feedback
- Status indicators (Overdue, On-track, Almost Due)
- Dynamic color-coded visualization
- Mobile-friendly layout

## 🔮 Future Enhancements

- Export interaction data to CSV/PDF
- Customizable reminder notifications
- Relationship strength scoring algorithm
- Goal-based recommendations
- Dark mode support
- Data persistence with database integration

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ to help you maintain meaningful relationships**
