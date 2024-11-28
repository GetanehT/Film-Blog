from django.urls import path
from .views import PostListView, PostDetailView, PostFeaturedView,PostCategoryView

urlpatterns = [
    path('', PostListView.as_view()),
    path('featured', PostFeaturedView.as_view()),
    path('category', PostCategoryView.as_view()),
    path('<slug>', PostDetailView.as_view()),
]