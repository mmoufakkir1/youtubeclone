# YouTube Clone

A modern YouTube clone built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Video Grid Layout** - Responsive video grid with hover previews
- **Sidebar Navigation** - Collapsible sidebar with categories and playlists
- **Category Filtering** - Filter videos by different categories
- **Video Player Page** - Full video player with comments and related videos
- **Search Functionality** - Search bar with autocomplete suggestions
- **Responsive Design** - Mobile-first responsive design

### Enhanced Features
- **Loading States** - Skeleton loading components for better UX
- **Smooth Animations** - Custom CSS animations and transitions
- **Custom Scrollbars** - Styled scrollbars for better visual appeal
- **Toast Notifications** - User feedback system for actions
- **Theme Toggle** - Dark/light mode switching capability
- **Improved Navigation** - Better mobile navigation and search experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── CategoryPills.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Skeleton.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Toast.tsx
│   │   └── VideoGridItem.tsx
│   ├── contexts/           # React contexts
│   │   └── SidebarContext.tsx
│   ├── data/              # Mock data
│   │   ├── home.ts
│   │   └── sidebar.ts
│   ├── layouts/           # Layout components
│   │   ├── PageHeader.tsx
│   │   └── Sidebar.tsx
│   ├── utils/             # Utility functions
│   │   ├── formatDuration.ts
│   │   └── formatTimeAgo.ts
│   ├── watch/             # Video player page
│   │   └── page.tsx
│   ├── home/              # Home page
│   │   └── page.tsx
│   ├── explore/           # Explore page
│   ├── shorts/            # Shorts page
│   └── tv/                # TV mode page
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: #181818 (Dark theme)
- **Secondary Background**: #1a1a1a
- **Accent Colors**: Purple (#8b5cf6) for highlights
- **Text Colors**: White and gray variations

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Animations
- **Fade In**: Smooth fade-in animations for content
- **Slide In**: Slide animations for notifications
- **Hover Effects**: Subtle lift effects on interactive elements
- **Loading States**: Pulse animations for skeleton components

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtubeclone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Enhancements Made

### 1. Search Functionality
- Added a comprehensive search bar with autocomplete
- Search suggestions based on user input
- Voice search button (UI only)
- Clear search functionality

### 2. Video Player Page
- Full-featured video player page (`/watch`)
- Video controls and information display
- Channel subscription functionality
- Comments section with user interactions
- Related videos sidebar
- Like/dislike/share/download buttons

### 3. Loading States
- Skeleton loading components for videos
- Loading animations for better user experience
- Progressive loading of content

### 4. Improved Responsive Design
- Better mobile navigation
- Responsive video grids
- Mobile-optimized search experience
- Touch-friendly interactions

### 5. Enhanced UI/UX
- Custom scrollbar styling
- Smooth animations and transitions
- Better hover effects
- Improved focus states for accessibility

### 6. Toast Notifications
- Success, error, warning, and info notifications
- Auto-dismiss functionality
- Multiple toast support
- Smooth slide-in animations

### 7. Theme System
- Dark/light theme toggle component
- Theme-aware styling
- Consistent color scheme

## 🔧 Customization

### Adding New Categories
Edit `src/app/data/home.ts` to add new video categories.

### Modifying Video Data
Update the mock data in `src/app/data/home.ts` to change video information.

### Styling Changes
Modify `src/app/globals.css` for custom animations and styles.

## 🎨 Component Library

The project includes a set of reusable components:

- **Button**: Versatile button component with multiple variants
- **SearchBar**: Search input with autocomplete
- **VideoGridItem**: Video thumbnail with hover preview
- **Skeleton**: Loading state components
- **Toast**: Notification system
- **ThemeToggle**: Theme switching component

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Real API integration
- [ ] Video upload functionality
- [ ] Playlist management
- [ ] Advanced search filters
- [ ] Video recommendations
- [ ] User profiles
- [ ] Live streaming support
- [ ] Mobile app (React Native)
- [ ] PWA features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
