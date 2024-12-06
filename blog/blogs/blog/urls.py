from django.urls import path
from .views import PostListView, PostDetailView, PostFeaturedView, PostCategoryView

urlpatterns = [
    path('', PostListView.as_view(), name='post-list'),  # List all posts
    path('featured/', PostFeaturedView.as_view(), name='post-featured'),  # Featured posts
    path('category/<str:category_name>/', PostCategoryView.as_view(), name='post-category'),  # Category filter
    path('post/<slug:slug>/', PostDetailView.as_view(), name='post-detail'),  # Post details by slug
]
