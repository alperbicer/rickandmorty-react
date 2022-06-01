import { configureStore } from '@reduxjs/toolkit';
import organization from './slices/organization';
import episodes from './slices/episodes';
export default configureStore({
  reducer: {
    organization,
    episodes,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['create/activities/fulfilled', 'activities/pending', 'create/news/fulfilled', 'create/news/fulfilled', 'categories/pending', 'news/pending', 'categories/fulfilled'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['createActivities.pending', 'activities.activities.5.image', 'payload.image', 'news.news.3.image'],
      },
    }),
});
