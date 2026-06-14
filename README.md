# hadad

A dynamic web platform showcasing the private oil painting gallery of Mrs. Hadad, located in Karaj, Iran. This project leverages Django for robust backend management and modern frontend libraries for a premium, interactive visual experience.

## 🔗 Links
- **Live Demo:** [samanbalahang.github.io/hadad/](https://samanbalahang.github.io/hadad/)
- **GitHub Repository:** [github.com/samanbalahang/hadad](https://github.com/samanbalahang/hadad)

---

## ✨ Main Features
- **Dynamic Content Management:** Add, update, and manage artwork portfolios and textual content seamlessly via the custom Django Admin panel.
- **Interactive Art Gallery:** Uses **Lightbox** to allow visitors to view high-resolution oil paintings in immersive detail.
- **Smooth Navigation & Sliders:** Integrated with **Swiper.js** for responsive touch-enabled carousels.
- **Scroll Animations:** Fluid UI enhancements powered by **AOS.js** (Animate on Scroll).
- **Tailwind CSS Styling:** A fully custom, highly responsive UI compiled with Tailwind CSS.

---

## 🛠️ Tech Stack & Dependencies
* **Backend:** Python 3.12, Django 6.0.2
* **Database:** SQLite (Default development database)
* **Frontend Design:** Tailwind CSS
* **JavaScript Libraries:** Lightbox, Swiper.js, AOS.js

---

## 📂 Project Structure

```text
hadad/
│
├── backend/                       # Django Backend Application
│   ├── manage.py
│   ├── hadad/                     # Project configuration directory
│   │   ├── settings.py
│   │   └── ...
│   ├── portfolios/                # Core app managing artwork & gallery data
│   │   ├── views.py
│   │   └── ...
│   ├── pages/                     # App managing static/dynamic landing content
│   │   ├── views.py
│   │   └── ...
│   ├── templates/                 # Global HTML views
│   │   ├── base.html
│   │   ├── includes/              # Shared template fragments (Header/Footer)
│   │   │   ├── footer.html
│   │   │   └── header.html
│   │   └── layouts/               # Page specific scaffolding
│   │       ├── blog.html
│   │       └── dashboard.html
│   ├── tailwind/                  # Tailwind source configuration files
│   │   └── style.css
│   └── static/                    # Backend asset targets
│       └── css/
│           ├── style.css
│           └── fonts/
│
├── index.html                     # Demo landing page
├── css/                           # Frontend assets for demo deployment
│   ├── swiper-init.css
│   ├── swiper-bundle.min.css
│   └── fonts/                     # Branding and custom Persian typography
│       ├── Shekari.woff2
│       ├── B.Shekari.woff2
│       └── bala.woff2
└── images/                        # Gallery and interface asset assets

```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have **Python 3.12** installed on your system.

### 1. Clone the Repository

```bash
git clone [https://github.com/samanbalahang/hadad.git](https://github.com/samanbalahang/hadad.git)
cd hadad

```

### 2. Set Up a Virtual Environment

Navigate to the backend directory and create a virtual environment:

```bash
cd backend
python -m venv venv

```

Activate the environment:

* **Windows:**
```bash
venv\Scripts\activate

```


* **macOS/Linux:**
```bash
source venv/bin/activate

```



### 3. Install Dependencies

Ensure your package manager is updated and install Django along with project requirements:

```bash
pip install --upgrade pip
pip install django==6.0.2
# If a requirements.txt file exists:
# pip install -r requirements.txt

```

### 4. Database Migrations

Initialize your local SQLite database:

```bash
python manage.py migrate

```

### 5. Create an Administrative User

To access the Django Admin and add portfolios dynamically, generate a superuser account:

```bash
python manage.py createsuperuser

```

### 6. Run the Development Server

```bash
python manage.py runserver

```

Open your web browser and head to `http://127.0.0.1:8000/`. You can access the backend management dashboard at `http://127.0.0.1:8000/admin/`.

---

## ✒️ Author

Developed by **Saman Balahang**.

```

# حداد (hadad)

یک پلتفرم وب پویا برای نمایش گالری شخصی نقاشی‌های رنگ روغن سرکار خانم حداد، واقع در ایران، شهر کرج. این پروژه در بخش بک‌اند از قدرت جنگو (Django) بهره می‌برد و در بخش فرانت‌اند با استفاده از کتابخانه‌های مدرن، تجربه‌ای بصری، روان و حرفه‌ای را برای مخاطب فراهم می‌کند.

## 🔗 لینک‌ها
- **دموی آنلاین:** [samanbalahang.github.io/hadad](https://samanbalahang.github.io/hadad/)
- **مخزن گیت‌هاب:** [github.com/samanbalahang/hadad](https://github.com/samanbalahang/hadad)

---

## ✨ ویژگی‌های اصلی
- **مدیریت پویای محتوا:** امکان افزودن، ویرایش و مدیریت نمونه‌کارها (پورتفولیو)، تصاویر و متون به صورت کاملاً داینامیک از طریق پنل مدیریت اختصاصی جنگو (Django Admin).
- **گالری تصاویر تعاملی:** استفاده از کتابخانه **Lightbox** جهت نمایش آثار رنگ روغن با کیفیت بالا و به صورت تمام‌صفحه.
- **اسلایدرهای روان:** پیاده‌سازی کاروسل‌ها و اسلایدرهای واکنش‌گرا و لمسی با کمک **Swiper.js**.
- **انیمیشن‌های اسکرول:** افکت‌های بصری جذاب و پویا هنگام اسکرول صفحه با استفاده از **AOS.js**.
- **طراحی با Tailwind CSS:** رابط کاربری کاملاً سفارشی، مدرن و واکنش‌گرا (Responsive).

---

## 🛠️ تکنولوژی‌ها و ابزارهای توسعه
* **بک‌اند (Backend):** Python 3.12, Django 6.0.2
* **پایگاه داده (Database):** SQLite (پیش‌فرض توسعه)
* **فرانت‌اند (Frontend):** Tailwind CSS
* **کتابخانه‌های جاوااسکریپت:** Lightbox, Swiper.js, AOS.js

---

## 📂 ساختار پوشه‌ها و فایل‌ها (Structure)

```text
hadad/
│
├── backend/                       # برنامه‌های مربوط به بک‌اند جنگو
│   ├── manage.py
│   ├── hadad/                     # پوشه اصلی تنظیمات پروژه
│   │   ├── settings.py
│   │   └── ...
│   ├── portfolios/                # اپلیکیشن مدیریت نمونه‌کارها و آثار گالری
│   │   ├── views.py
│   │   └── ...
│   ├── pages/                     # اپلیکیشن مدیریت صفحات و محتوای استاتیک/داینامیک
│   │   ├── views.py
│   │   └── ...
│   ├── templates/                 # قالب‌های HTML پروژه
│   │   ├── base.html
│   │   ├── includes/              # تکه‌های مشترک قالب (Header/Footer)
│   │   │   ├── footer.html
│   │   │   └── header.html
│   │   └── layouts/               # ساختارهای اختصاصی صفحات
│   │       ├── blog.html
│   │       └── dashboard.html
│   ├── tailwind/                  # فایل‌های منبع و کانفیگ Tailwind
│   │   └── style.css
│   └── static/                    # فایل‌های استاتیک نهایی بک‌اند
│       └── css/
│           ├── style.css
│           └── fonts/
│
├── index.html                     # صفحه فرود دمو (Demo Landing Page)
├── css/                           # استایل‌های فرانت‌اند برای نسخه دمو گیت‌هاب
│   ├── swiper-init.css
│   ├── swiper-bundle.min.css
│   └── fonts/                     # فونت‌های سفارشی و تایپوگرافی فارسی
│       ├── Shekari.woff2
│       ├── B.Shekari.woff2
│       └── bala.woff2
└── images/                        # تصاویر گالری و دارایی‌های بصری پروژه

```

---

## 🚀 راهنمای راه‌اندازی و اجرا (Local Setup)

برای راه‌اندازی و اجرای این پروژه روی سیستم خود، مراحل زیر را دنبال کنید:

### پیش‌نیازها

از نصب بودن **Python 3.12** روی سیستم خود مطمئن شوید.

### ۱. کلون کردن مخزن

```bash
git clone [https://github.com/samanbalahang/hadad.git](https://github.com/samanbalahang/hadad.git)
cd hadad

```

### ۲. ساخت محیط مجازی (Virtual Environment)

وارد پوشه `backend` شده و یک محیط مجازی بسازید:

```bash
cd backend
python -m venv venv

```

فعال‌سازی محیط مجازی:

* **در ویندوز (Windows):**

```bash
  venv\Scripts\activate

```

* **در مک و لینوکس (macOS/Linux):**

```bash
  source venv/bin/activate

```

### ۳. نصب نیازمندی‌ها و وابستگی‌ها

مدیریت پکیج خود (pip) را به‌روزرسانی کرده و نسخه مشخص شده جنگو را نصب کنید:

```bash
pip install --upgrade pip
pip install django==6.0.2
# در صورت وجود فایل requirements.txt:
# pip install -r requirements.txt

```

### ۴. اعمال مهاجرت‌ها (Database Migrations)

پایگاه داده محلی SQLite را مقداردهی اولیه کنید:

```bash
python manage.py migrate

```

### ۵. ساخت حساب کاربری مدیر (Superuser)

برای دسترسی به پنل مدیریت جنگو و افزودن پورتفولیوها، یک حساب کاربری مدیر بسازید:

```bash
python manage.py createsuperuser

```

### ۶. اجرای سرور توسعه

سرور داخلی جنگو را روشن کنید:

```bash
python manage.py runserver

```

حالا می‌توانید مرورگر خود را باز کرده و به آدرس `http://127.0.0.1:8000/` بروید. برای دسترسی به پنل مدیریت نیز از آدرس `http://127.0.0.1:8000/admin/` استفاده کنید.

---

## ✒️ توسعه‌دهنده

توسعه داده شده توسط **سامان بالاهنگ**.

```

```