<?php
namespace IZiviPlanningBundle\Repository;


use Doctrine\ORM\QueryBuilder;

class StateRepository extends EntityRepository
{
    /**
     * @param string $text
     * @param QueryBuilder $qb
     *
     * @return QueryBuilder
     */
    public function search($text, QueryBuilder $qb = null)
    {
        if ($qb == null) {
            $qb = $this->builder;
        }

        $aliases = $qb->getRootAliases();
        $alias = array_shift($aliases);

        $qb->andWhere($qb->expr()->orX(
            $qb->expr()->like($alias . '.shortCode', ':text_like')
        ));
        $qb->setParameter('text_like', '%' . $text . '%');

        return $this;
    }
}
