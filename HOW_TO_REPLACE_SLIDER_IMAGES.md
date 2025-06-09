# How to Replace Slider Images - OGUZHAN LLC

## 📍 Where to Find the Images

The slider images are defined in `src/pages/Index.tsx` around **line 208-260**.

Look for the `ImageSlider` component with the `slides` array:

```typescript
<ImageSlider
  slides={[
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586953208448...", // ← REPLACE THIS URL
      title: "Cross-Country Excellence",
      description: "Our professional drivers navigate...",
      category: "Long-Distance Transport",
    },
    // ... more slides
  ]}
/>
```

## 🔄 How to Replace Images

### Option 1: Use Your Own Images (Recommended)

1. **Upload your images** to your website's `public/` folder:

   ```
   public/
   ├── truck-highway.jpg
   ├── warehouse.jpg
   ├── fleet.jpg
   ├── cargo-loading.jpg
   └── operations-center.jpg
   ```

2. **Update the image URLs** in `src/pages/Index.tsx`:
   ```typescript
   slides={[
     {
       id: 1,
       image: "/truck-highway.jpg", // ← Your uploaded image
       title: "Cross-Country Excellence",
       description: "Our professional drivers...",
       category: "Long-Distance Transport",
     },
     {
       id: 2,
       image: "/warehouse.jpg", // ← Your uploaded image
       title: "Modern Warehouse Operations",
       description: "State-of-the-art logistics...",
       category: "Logistics Solutions",
     },
     // ... continue for all 5 slides
   ]}
   ```

### Option 2: Use Different Stock Images

Replace the Unsplash URLs with new ones:

```typescript
{
  id: 1,
  image: "https://new-image-url-here.jpg",
  title: "Your Custom Title",
  description: "Your custom description...",
  category: "Your Category",
}
```

## 📸 Image Requirements

### Recommended Specifications:

- **Size**: 2000px × 1200px (minimum)
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 or similar
- **Quality**: High resolution for crisp display
- **File Size**: Under 1MB each for fast loading

### Good Image Types for Trucking:

- **Trucks on highways**
- **Loading/unloading operations**
- **Warehouse facilities**
- **Your actual fleet**
- **Professional drivers**
- **Modern equipment**

## ✏️ Customizing Content

You can also update the text for each slide:

```typescript
{
  id: 1,
  image: "/your-image.jpg",
  title: "Your Custom Title",           // ← Change this
  description: "Your description...",   // ← Change this
  category: "Your Service Type",        // ← Change this
}
```

## 🎯 Best Practices

### For Professional Results:

1. **Use your actual photos** when possible
2. **Keep consistent lighting** across images
3. **Show your real equipment** and operations
4. **Include your branded trucks** if available
5. **Maintain professional quality**

### Content Tips:

- **Titles**: Keep them short and impactful
- **Descriptions**: Focus on benefits to customers
- **Categories**: Match your actual services

## 🔧 Quick Example Update

Here's how to replace just the first image:

**Before:**

```typescript
{
  id: 1,
  image: "https://images.unsplash.com/photo-1586953208448...",
  title: "Cross-Country Excellence",
  description: "Our professional drivers navigate...",
  category: "Long-Distance Transport",
}
```

**After:**

```typescript
{
  id: 1,
  image: "/my-truck-photo.jpg",
  title: "OGUZHAN LLC Fleet",
  description: "Our modern trucks deliver your cargo safely across America.",
  category: "Professional Transport",
}
```

## 📁 File Location

**File to edit:** `src/pages/Index.tsx`
**Search for:** `slides={[`
**Line range:** Approximately lines 208-260

## 🚀 After Making Changes

1. **Save the file**
2. **Refresh your browser**
3. **Check the slider** to see your new images
4. **Test on mobile** to ensure they look good

## 💡 Pro Tip

Start by replacing just one image to test, then replace the rest once you're happy with how it looks!
