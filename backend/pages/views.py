from django.shortcuts import render
from portfolios.models import Portfolio
from pages.models import frontpage

# Create your views here.
def main_view(request):
    portfolios = Portfolio.objects.all()
    frontPage = frontpage.objects.first()
    # داده‌ای که می‌خواهیم به تمپلیت بفرستیم
    context = {
         'portfolios': portfolios,
         'frontPage': frontPage,
    }
    # رندر کردن تمپلیت با داده‌ها
    return render(request, 'ui/index.html', context)
