import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import PaidRoute from "@/components/PaidRoute";
import SectionTitle from "@/widgets/SectionTitle";

export default function MapsPage() {
  return (
    <PaidRoute>
      <Chapter>
        <SectionTitle title="Maps" />

        <Article>
          <p>
            When working with collections of data, JavaScript gives us a variety
            of structures like Object, Array, Set, and Map. In this chapter, we
            will dive deep into the Map object — a powerful key-value store
            introduced in ES6.
          </p>
        </Article>

        <Article title="What is a Map?">
          <p></p>
        </Article>
      </Chapter>
    </PaidRoute>
  );
}
