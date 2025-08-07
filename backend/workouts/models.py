from django.db import models
from django.contrib.auth.models import User

class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    exercise = models.CharField(max_length=100)
    duration = models.PositiveIntegerField()  # in minutes
    calories_burned = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.exercise} on {self.date}"
