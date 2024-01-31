//helper function to conditionally join class names
//using it in Calendar.js to conditionally add class names to the calendar cells

export default function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
