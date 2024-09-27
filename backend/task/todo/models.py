from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    STATUS_CHOICES = [
        ('done', 'Done'),
        ('pending', 'Pending'),
        ('cancelled', 'Cancelled'),
        ('undone', 'Undone'),
    ]
    task = models.ForeignKey(Task, related_name='comments', on_delete=models.CASCADE)
    comment_text = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"Comment on {self.task.title} - {self.status}"