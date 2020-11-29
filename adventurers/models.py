from django.db import models

class Adventurer(models.Model):
    name = models.CharField("Name", max_length=75)
    char_class = model.CharField("Character Class", max_length=50)
    char_race = model.CharField("Character Race", max_length=50)
    atk = model.IntegerField("Attack")
    ac = model.IntegerField("Armor Class")
    hp = model.IntegerField("Hit Points")
    mgc = model.IntegerField("Magic")

    def __str__(self):
        return self.name