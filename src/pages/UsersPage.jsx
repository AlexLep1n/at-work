import ActiveUsers from "../components/blocks/ActiveUsers/ActiveUsers";
import ArchiveUsers from "../components/blocks/ArchiveUsers/ArchiveUsers";

export default function UsersPage() {
  return (
    <section>
      <ActiveUsers />
      <ArchiveUsers />
    </section>
  );
}
