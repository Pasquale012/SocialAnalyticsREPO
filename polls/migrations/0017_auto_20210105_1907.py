# Generated by Django 3.1.4 on 2021-01-05 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0016_auto_20210105_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='bioPost',
            field=models.CharField(default='No Bio', max_length=2000),
        ),
    ]
