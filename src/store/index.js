import { configureStore } from '@reduxjs/toolkit';
import organization from './slices/organization';
import episode from './slices/episode';
export default configureStore({
  reducer: {
    organization,
    episode,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['create/activities/fulfilled', 'activities/pending', 'create/news/fulfilled', 'create/news/fulfilled', 'categories/pending', 'news/pending', 'categories/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['createActivities.pending', 'activities.activities.5.image', 'payload.image', 'news.news.3.image'],
      },
    }),
});
